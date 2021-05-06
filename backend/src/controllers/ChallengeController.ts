import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { env } from "../environment";
import EntityHelper from "../libs/EntityHelper";
import { Challenge } from "../models/Challenge";

export default class ChallengeController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const challenge = new Challenge();
      EntityHelper.setColumnsFromBody(challenge, req.body);

      const errors = await validate(challenge, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(Challenge).save(challenge);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await getRepository(Challenge).find());
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
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
