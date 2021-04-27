import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trail } from "./Trail";

@Entity("activity", { schema: "traily" })
export class Activity {
  @PrimaryGeneratedColumn({ type: "int", name: "activityId" })
  activityId: number;

  @Column("varchar", { name: "activity", length: 100 })
  activity: string;

  @OneToMany(() => Trail, (trail) => trail.activity)
  trails: Trail[];
}
