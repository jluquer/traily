import User from "./user";

export default interface TrailComment {
  trailCommentId?: number;
  comment: string;
  trailId: number;
  userId?: number;
  createdAt?: Date;
  user?: User;
}