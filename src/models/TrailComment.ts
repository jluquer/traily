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

@Index("userId", ["userId"], {})
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
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Trail, (trail) => trail.trailComments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "trailId", referencedColumnName: "trailId" }])
  trail: Trail;
}
