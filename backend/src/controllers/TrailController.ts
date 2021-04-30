import { Request, Response } from "express";

export default class TrailController {
  static create = async (req: Request, res: Response) => {
    const {
      name,
      country,
      province,
      city,
      difficulty,
      description,
      elevationGain,
      maxElevation,
      minElevation,
      distance,
      trailFilePath,
      activityId,
    } = req.body; 
  };
  static getAll = async (req: Request, res: Response) => {};
  static getOneById = async (req: Request, res: Response) => {};
  static update = async (req: Request, res: Response) => {};
  static delete = async (req: Request, res: Response) => {};
}
