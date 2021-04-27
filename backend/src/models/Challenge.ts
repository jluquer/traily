import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserChallenge } from "./UserChallenge";
import { ChallengeComment } from "./ChallengeComment";

@Entity("challenge", { schema: "traily" })
export class Challenge {
  @PrimaryGeneratedColumn({ type: "int", name: "challengeId" })
  challengeId: number;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("text", { name: "description" })
  description: string;

  @OneToMany(() => UserChallenge, (userChallenge) => userChallenge.challenge)
  userChallenges: UserChallenge[];

  @OneToMany(
    () => ChallengeComment,
    (challengeComment) => challengeComment.challenge
  )
  challengeComments: ChallengeComment[];
}
