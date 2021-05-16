import Activity from './activity';
import User from './user';

export default interface Trail {
  trailId?: number;
  description: string;
  distance: number | null;
  elevGain: number | null;
  name: string;
  elevMax?: number | null;
  elevMin?: number | null;
  difficulty: number;
  trailFilepath?: string | null;
  country: string;
  province: string;
  city: string;
  activityId: number;
  userId: number;
  createdAt: Date;
  user?: User;
  activity?: Activity;
}
