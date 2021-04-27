import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("userId", ["userId"], {})
@Index("followerUserId", ["followerUserId"], {})
@Entity("follow", { schema: "traily" })
export class Follow {
  @PrimaryGeneratedColumn({ type: "int", name: "followId" })
  followId: number;

  @Column("int", { name: "userId" })
  userId: number;

  @Column("int", { name: "followerUserId" })
  followerUserId: number;

  @ManyToOne(() => User, (user) => user.follows, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => User, (user) => user.follows2, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "followerUserId", referencedColumnName: "userId" }])
  followerUser: User;
}
