import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Challenge } from "./Challenge";
import { IsNotEmpty } from "class-validator";

@Index("challengeId", ["challengeId"], {})
@Entity("user_challenge", { schema: "traily" })
export class UserChallenge {
  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @Column("int", { primary: true, name: "challengeId" })
  challengeId: number;

  @Column("varchar", { name: "status", length: 30 })
  @IsNotEmpty()
  status: string;

  @ManyToOne(() => User, (user) => user.userChallenges, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  @IsNotEmpty()
  user: User;

  @ManyToOne(() => Challenge, (challenge) => challenge.userChallenges, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "challengeId", referencedColumnName: "challengeId" }])
  @IsNotEmpty()
  challenge: Challenge;
}
