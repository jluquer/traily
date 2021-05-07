import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { env } from "../environment";
import { Challenge } from "../models/Challenge";
import { ChallengeComment } from "../models/ChallengeComment";
import { Trail } from "../models/Trail";
import { TrailComment } from "../models/TrailComment";
import { User } from "../models/User";

export default class CommentController {
  static async createTrailComment(req: Request, res: Response): Promise<Response> {
    try {
      const trailComment = new TrailComment();
      const trail = await getRepository(Trail).findOne(+req.body.trailId);
      const user = await getRepository(User).findOne(res.locals.payload.userId);

      if (!user || !trail) return res.status(404).json({ status: "error" });
      trailComment.comment = req.body.comment;
      trailComment.user = user;
      trailComment.trail = trail;

      const errors = await validate(trailComment, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(TrailComment).save(trailComment);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async createChallengeComment(req: Request, res: Response): Promise<Response> {
    try {
      const challengeComment = new ChallengeComment();
      const challenge = await getRepository(Challenge).findOne(+req.body.challengeId);
      const user = await getRepository(User).findOne(res.locals.payload.userId);

      if (!user || !challenge) return res.status(404).json({ status: "error" });
      challengeComment.comment = req.body.comment;
      challengeComment.user = user;
      challengeComment.challenge = challenge;

      const errors = await validate(challengeComment, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(ChallengeComment).save(challengeComment);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async getAllByTrailId(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(
        await getRepository(TrailComment).find({
          where: { trailId: +req.header("trailId") },
          relations: ["user"],
        })
      );
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async getAllByChallengeId(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(
        await getRepository(ChallengeComment).find({
          where: { challengeId: +req.header("challengeId") },
          relations: ["user"],
        })
      );
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async updateTrailComment(req: Request, res: Response): Promise<Response> {
    try {
      const trailCommentRepository = getRepository(TrailComment);
      const trailComment = await trailCommentRepository.findOne(+req.header("trailCommentId"));

      if (!trailComment) return res.status(404).json({ status: "error" });
      trailComment.comment = req.body.comment;

      const errors = await validate(trailComment, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(TrailComment).save(trailComment);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async updateChallengeComment(req: Request, res: Response): Promise<Response> {
    try {
      const challengeCommentRepository = getRepository(ChallengeComment);
      const challengeComment = await challengeCommentRepository.findOne(
        +req.header("challengeCommentId")
      );

      if (!challengeComment) return res.status(404).json({ status: "error" });
      challengeComment.comment = req.body.comment;

      const errors = await validate(challengeComment, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await challengeCommentRepository.save(challengeComment);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async deleteTrailComment(req: Request, res: Response): Promise<Response> {
    try {
      const trailCommentRepository = getRepository(TrailComment);
      const trailComment = await trailCommentRepository.findOneOrFail(
        +req.header("trailCommentId")
      );

      await trailCommentRepository.delete(trailComment);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

  static async deleteChallengeComment(req: Request, res: Response): Promise<Response> {
    try {
      const challengeCommentRepository = getRepository(ChallengeComment);
      const challengeComment = await challengeCommentRepository.findOneOrFail(
        +req.header("challengeCommentId")
      );

      await challengeCommentRepository.delete(challengeComment);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }
}
