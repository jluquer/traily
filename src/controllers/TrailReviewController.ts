import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { env } from "../environment";
import EntityHelper from "../libs/EntityHelper";
import { Trail } from "../models/Trail";
import { TrailReview } from "../models/TrailReview";
import { User } from "../models/User";

export default class TrailReviewController {
  /**
   * Creates a new trail review. If the user id or the trail id does not belong
   * to a trail or user it will fail. If there is a trail review with the same
   * user and trail it will also return an error response.
   *
   * @param req
   * @param res
   * @returns
   */
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

  /**
   * Get all trail reviews by trail id.
   * 
   * @param req
   * @param res
   * @returns
   */
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

  /**
   * Updates one trail review. If there isn't  a trail review with the user id
   * and trail id from headers it will fail.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
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

  /**
   * Deletes one trail review from database.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
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
