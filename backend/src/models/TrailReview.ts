import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Trail } from "./Trail";

@Index("trailId", ["trailId"], {})
@Entity("trail_review", { schema: "traily" })
export class TrailReview {
  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @Column("int", { primary: true, name: "trailId" })
  trailId: number;

  @Column("int", { name: "rating" })
  rating: number;

  @Column("text", { name: "review" })
  review: string;

  @ManyToOne(() => User, (user) => user.trailReviews, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Trail, (trail) => trail.trailReviews, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "trailId", referencedColumnName: "trailId" }])
  trail: Trail;
}
