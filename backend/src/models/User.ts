import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trail } from "./Trail";
import { TrailReview } from "./TrailReview";
import { Follow } from "./Follow";
import { UserChallenge } from "./UserChallenge";
import { ChallengeComment } from "./ChallengeComment";
import { TrailComment } from "./TrailComment";

@Entity("user", { schema: "traily" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "userId" })
  userId: number;

  @Column("varchar", { name: "name", length: 80 })
  name: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "email", length: 150 })
  email: string;

  @Column("tinyint", { name: "type" })
  type: number;

  @OneToMany(() => Trail, (trail) => trail.user)
  trails: Trail[];

  @OneToMany(() => TrailReview, (trailReview) => trailReview.user)
  trailReviews: TrailReview[];

  @OneToMany(() => Follow, (follow) => follow.user)
  follows: Follow[];

  @OneToMany(() => Follow, (follow) => follow.followerUser)
  follows2: Follow[];

  @OneToMany(() => UserChallenge, (userChallenge) => userChallenge.user)
  userChallenges: UserChallenge[];

  @OneToMany(
    () => ChallengeComment,
    (challengeComment) => challengeComment.user
  )
  challengeComments: ChallengeComment[];

  @OneToMany(() => TrailComment, (trailComment) => trailComment.user)
  trailComments: TrailComment[];
}
