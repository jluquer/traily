import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { env } from "../environment";
import EntityHelper from "../libs/EntityHelper";
import { Challenge } from "../models/Challenge";
import { User } from "../models/User";
import { UserChallenge } from "../models/UserChallenge";

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
    try {
      const challengeId = req.header("challengeId");
      return res.json(await getRepository(Challenge).findOneOrFail(challengeId));
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const challengeId = req.header("challengeId");
      const challengeRepository = getRepository(Challenge);
      const challenge = await challengeRepository.findOne(challengeId);
      if (!challenge) return res.status(404).json({ status: "error" });

      EntityHelper.setColumnsFromBody(challenge, req.body);

      const errors = await validate(challenge, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await challengeRepository.save(challenge);
      return res.status(201).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const challengeId = req.header("challengeId");
      const challengeRepository = getRepository(Challenge);
      const challenge = await challengeRepository.findOneOrFail(challengeId);
      await challengeRepository.delete(challenge);
      return res.status(201).json({ status: "success" });
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

  static async complete(req: Request, res: Response): Promise<Response> {
    try {
      const userId = +req.header("userId");
      const challengeId = +req.header("challengeId");

      const userChallenge = new UserChallenge();
      userChallenge.user = await getRepository(User).findOne(userId);
      userChallenge.challenge = await getRepository(Challenge).findOne(challengeId);
      userChallenge.status = "completed";

      const errors = await validate(userChallenge, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(UserChallenge).save(userChallenge);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async getCompleted(req: Request, res: Response): Promise<Response> {
    try {
      const userId = +req.header("userId");
      return res.json(
        await getRepository(UserChallenge).find({ where: { userId }, relations: ["challenge"] })
      );
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }
}
