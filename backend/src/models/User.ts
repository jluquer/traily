import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trail } from "./Trail";
import { TrailReview } from "./TrailReview";
import { Follow } from "./Follow";
import { UserChallenge } from "./UserChallenge";
import { ChallengeComment } from "./ChallengeComment";
import { TrailComment } from "./TrailComment";
import * as bcrypt from "bcryptjs";
import { IsEmail, isEmpty, IsNotEmpty, MinLength } from "class-validator";

@Entity("user", { schema: "traily" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "userId" })
  userId: number;

  @Column("varchar", { name: "name", length: 80 })
  @MinLength(6)
  name: string;

  @Column("varchar", { name: "email", length: 150, unique: true })
  @IsEmail()
  email: string;

  @Column("varchar", { name: "password", length: 255, select: false })
  @MinLength(4)
  password: string;

  @Column("tinyint", { name: "type" })
  @IsNotEmpty()
  type: number;

  @OneToMany(() => Trail, (trail) => trail.user)
  trails: Trail[];

  @OneToMany(() => TrailReview, (trailReview) => trailReview.user)
  trailReviews: TrailReview[];

  @OneToMany(() => Follow, (follow) => follow.user)
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.followerUser)
  follows: Follow[];

  @OneToMany(() => UserChallenge, (userChallenge) => userChallenge.user)
  userChallenges: UserChallenge[];

  @OneToMany(() => ChallengeComment, (challengeComment) => challengeComment.user)
  challengeComments: ChallengeComment[];

  @OneToMany(() => TrailComment, (trailComment) => trailComment.user)
  trailComments: TrailComment[];

  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  checkPassword(password): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
