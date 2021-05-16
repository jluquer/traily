import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Trail } from "./Trail";
import { IsNotEmpty, Max, Min } from "class-validator";

@Index("trailId", ["trailId"], {})
@Entity("trail_review", { schema: "traily" })
export class TrailReview {
  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @Column("int", { primary: true, name: "trailId" })
  trailId: number;

  @Column("int", { name: "rating" })
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rating: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column("text", { name: "review", nullable: true })
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
