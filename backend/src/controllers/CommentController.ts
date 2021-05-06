import { Request, Response } from "express";

export default class CommentController {
  static async createTrailComment(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
  static async createChallengeComment(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
  static async getAllByTrailId(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
  static async getAllByChallengeId(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
  static async updateTrailComment(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
  static async updateChallengeComment(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
  static async deleteTrailComment(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
  static async deleteChallengeComment(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
}
