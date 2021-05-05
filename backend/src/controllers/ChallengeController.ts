import { Request, Response } from "express";

export default class ChallengeController {
  static async create(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }

  static async getAll(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }

  static async getOneById(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }

  static async update(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }

  static async complete(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }

  static async getCompleted(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ status: "success" });
  }
}
