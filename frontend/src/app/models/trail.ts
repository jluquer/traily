import Activity from './activity';
import User from './user';

export default interface Trail {
  trailId?: number;
  name: string;
  description: string;
  distance: number | null;
  elevGain: number | null;
  difficulty: number | null;
  country: string;
  province: string;
  city: string;
  activityId: number;
  userId: number;
  elevMax?: number | null;
  elevMin?: number | null;
  trailFilepath?: string | null;
  createdAt?: Date;
  user?: User;
  activity?: Activity;
}
