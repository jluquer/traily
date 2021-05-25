import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Challenge } from "./Challenge";
import { IsNotEmpty } from "class-validator";

@Index("userId", ["userId"], { })
@Index("challengeId", ["challengeId"], {})
@Entity("challenge_comment", { schema: "traily" })
export class ChallengeComment {
  @PrimaryGeneratedColumn({ type: "int", name: "challengeCommentId" })
  challengeCommentId: number;

  @Column("text", { name: "comment" })
  @IsNotEmpty()
  comment: string;

  @Column("int", { name: "userId" })
  userId: number;

  @Column("int", { name: "challengeId" })
  challengeId: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.challengeComments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Challenge, (challenge) => challenge.challengeComments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "challengeId", referencedColumnName: "challengeId" }])
  challenge: Challenge;
}
