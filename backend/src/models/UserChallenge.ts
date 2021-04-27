import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Challenge } from "./Challenge";

@Index("challengeId", ["challengeId"], {})
@Entity("user_challenge", { schema: "traily" })
export class UserChallenge {
  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @Column("int", { primary: true, name: "challengeId" })
  challengeId: number;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @ManyToOne(() => User, (user) => user.userChallenges, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Challenge, (challenge) => challenge.userChallenges, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "challengeId", referencedColumnName: "challengeId" }])
  challenge: Challenge;
}
