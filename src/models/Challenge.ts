import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserChallenge } from "./UserChallenge";
import { ChallengeComment } from "./ChallengeComment";
import { IsNotEmpty } from "class-validator";

@Entity("challenge", { schema: "traily" })
export class Challenge {
  @PrimaryGeneratedColumn({ type: "int", name: "challengeId" })
  challengeId: number;

  @Column("varchar", { name: "title", length: 100 })
  @IsNotEmpty()
  title: string;

  @Column("text", { name: "description" })
  @IsNotEmpty()
  description: string;

  @OneToMany(() => UserChallenge, (userChallenge) => userChallenge.challenge)
  userChallenges: UserChallenge[];

  @OneToMany(() => ChallengeComment, (challengeComment) => challengeComment.challenge)
  challengeComments: ChallengeComment[];
}
