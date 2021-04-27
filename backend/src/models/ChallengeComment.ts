import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Challenge } from "./Challenge";

@Index("userId", ["userId", "challengeId"], { unique: true })
@Index("challengeId", ["challengeId"], {})
@Entity("challenge_comment", { schema: "traily" })
export class ChallengeComment {
  @PrimaryGeneratedColumn({ type: "int", name: "challengeCommentId" })
  challengeCommentId: number;

  @Column("text", { name: "comment" })
  comment: string;

  @Column("int", { name: "userId" })
  userId: number;

  @Column("int", { name: "challengeId" })
  challengeId: number;

  @ManyToOne(() => User, (user) => user.challengeComments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Challenge, (challenge) => challenge.challengeComments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "challengeId", referencedColumnName: "challengeId" }])
  challenge: Challenge;
}
