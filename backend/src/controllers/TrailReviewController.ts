import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { env } from "../environment";
import EntityHelper from "../libs/EntityHelper";
import { Trail } from "../models/Trail";
import { TrailReview } from "../models/TrailReview";
import { User } from "../models/User";

export default class TrailReviewController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const trailReviewRepository = getRepository(TrailReview);
      const trail = await getRepository(Trail).findOne(req.header("trailId"));
      const user = await getRepository(User).findOne(req.header("userId"));
      if (!trail || !user) return res.status(404).json({ status: "error" });
      if (await trailReviewRepository.findOne({ trailId: trail.trailId, userId: user.userId }))
        return res.status(409).json({ status: "error" });

      const newReview = new TrailReview();
      EntityHelper.setColumnsFromBody(newReview, req.body);
      newReview.trail = trail;
      newReview.user = user;

      const errors = await validate(newReview, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await trailReviewRepository.save(newReview);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async getAllByTrailId(req: Request, res: Response): Promise<Response> {
    try {
      const trailId = req.header("trailId");
      if (!+trailId) throw "Invalid trailId";
      
      return res.json(
        await getRepository(TrailReview).find({
          relations: ["user"],
          where: { trailId: trailId },
        })
      );
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const trailReviewRepository = getRepository(TrailReview);
      const trail = await getRepository(Trail).findOneOrFail(req.header("trailId"));
      const user = await getRepository(User).findOneOrFail(req.header("userId"));
      const trailReview = await trailReviewRepository.findOne({
        trailId: trail.trailId,
        userId: user.userId,
      });
      if (!trailReview) return res.status(404).json({ status: "error" });

      const newReview = new TrailReview();
      EntityHelper.setColumnsFromBody(newReview, req.body);
      newReview.trail = trail;
      newReview.user = user;

      const errors = await validate(newReview, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await trailReviewRepository.save(newReview);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const trailReviewRepository = getRepository(TrailReview);
      const trailReview = await trailReviewRepository.findOneOrFail({
        trailId: +req.header("trailId"),
        userId: +req.header("userId"),
      });
      await trailReviewRepository.delete(trailReview);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }
}
