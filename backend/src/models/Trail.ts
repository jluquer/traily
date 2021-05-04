import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Activity } from "./Activity";
import { User } from "./User";
import { TrailReview } from "./TrailReview";
import { TrailComment } from "./TrailComment";
import { IsNotEmpty } from "class-validator";

@Index("activityId", ["activityId"], {})
@Index("userId", ["userId"], {})
@Entity("trail", { schema: "traily" })
export class Trail {
  @PrimaryGeneratedColumn({ type: "int", name: "trailId" })
  trailId: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "distance", nullable: true })
  distance: number | null;

  @Column("int", { name: "elev_gain", nullable: true })
  elevGain: number | null;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("int", { name: "elev_max", nullable: true })
  elevMax: number | null;

  @Column("int", { name: "elev_min", nullable: true })
  elevMin: number | null;

  @Column("int", { name: "difficulty" })
  @IsNotEmpty()
  difficulty: number;

  @Column("varchar", { name: "trail_filepath", nullable: true, length: 255 })
  trailFilepath: string | null;

  @Column("varchar", { name: "country", length: 120 })
  @IsNotEmpty()
  country: string;

  @Column("varchar", { name: "province", length: 120 })
  @IsNotEmpty()
  province: string;

  @Column("varchar", { name: "city", length: 120 })
  @IsNotEmpty()
  city: string;

  @Column("int", { name: "activityId" })
  activityId: number;

  @Column("int", { name: "userId" })
  userId: number;

  @ManyToOne(() => Activity, (activity) => activity.trails, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "activityId", referencedColumnName: "activityId" }])
  @IsNotEmpty()
  activity: Activity;

  @ManyToOne(() => User, (user) => user.trails, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  @IsNotEmpty()
  user: User;

  @OneToMany(() => TrailReview, (trailReview) => trailReview.trail)
  trailReviews: TrailReview[];

  @OneToMany(() => TrailComment, (trailComment) => trailComment.trail)
  trailComments: TrailComment[];

  static isTrackFile(filename: string): boolean {
    return filename !== undefined && filename.match(/\.(gpx)$/g) !== null;
  }
}
