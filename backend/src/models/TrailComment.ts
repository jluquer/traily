import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Trail } from "./Trail";
import { IsNotEmpty } from "class-validator";

@Index("userId", ["userId", "trailId"], { unique: true })
@Index("trailId", ["trailId"], {})
@Entity("trail_comment", { schema: "traily" })
export class TrailComment {
  @PrimaryGeneratedColumn({ type: "int", name: "trailCommentId" })
  trailCommentId: number;

  @Column("text", { name: "comment" })
  @IsNotEmpty()
  comment: string;

  @Column("int", { name: "userId" })
  userId: number;

  @Column("int", { name: "trailId" })
  trailId: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.trailComments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Trail, (trail) => trail.trailComments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "trailId", referencedColumnName: "trailId" }])
  trail: Trail;
}
