import { env } from "../environment";
import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { validate } from "class-validator";
import EntityHelper from "../libs/EntityHelper";
import { Activity } from "../models/Activity";
import { Trail } from "../models/Trail";
import { User } from "../models/User";
import StorageHelper from "../libs/StorageHelper";

export default class TrailController {
  /**
   * Creates a new trail. The user will be the user stored in token (the logged user).
   *
   * @param req
   * @param res
   * @returns status success or error.
   */
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await getRepository(User).findOne(res.locals.payload.userId);
      const activity = await getRepository(Activity).findOne(req.body.activityId);
      if (!user || !activity) return res.status(404).json({ status: "error" });

      const trail = new Trail();
      EntityHelper.setColumnsFromBody(trail, req.body);
      trail.user = user;
      trail.activity = activity;

      const errors = await validate(trail, env.validationOptions);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(Trail).save(trail);
      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  /**
   * Get all trails from database. It will return in the object the user and activity
   * related.
   *
   * @param req
   * @param res
   * @returns trails or error.
   */
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await getRepository(Trail).find({ relations: ["user", "activity"] }));
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  /**
   * Get one trail by id or fails. It will return in the object the user and activity
   * related.
   *
   * @param req
   * @param res
   * @returns trail or error.
   */
  static async getOneById(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(
        await getRepository(Trail).findOneOrFail(+req.headers.id, {
          relations: ["user", "activity"],
        })
      );
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  /**
   * Updates one trail if the trail id provided exists.
   *
   * @param req
   * @param res
   * @returns
   */
  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const trailId = +req.headers.id;
      const activityId = req.body.activityId as number;
      const trailRepository = getRepository(Trail);
      const trail = await trailRepository.findOne(trailId, { relations: ["user", "activity"] });

      if (trail && activityId) trail.activity = await getRepository(Activity).findOne(activityId);
      if (!trail || (activityId && !trail.activity))
        return res.status(404).json({ status: "error" });
      if (
        req.body.trailFilepath &&
        trail.trailFilepath &&
        req.body.trailFilepath !== trail.trailFilepath
      )
        StorageHelper.deleteFile(trail.trailFilepath);

      EntityHelper.setColumnsFromBody(trail, req.body);

      const errors = await validate(trail, env.validationOptions);
      if (errors.length > 0) return res.status(400).send({ errors });

      await trailRepository.save(trail);
      return res.status(201).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  /**
   * Deletes only one trail if the trail id provided belongs to a trail.
   *
   * @param req
   * @param res
   * @returns
   */
  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const trailRepository = getRepository(Trail);
      const trail = await trailRepository.findOneOrFail(+req.headers.id);
      if (trail.trailFilepath) StorageHelper.deleteFile(trail.trailFilepath);
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Trail)
        .where("trailId = :id", { id: trail.trailId })
        .execute();
      return res.status(201).json({ status: "success" });
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

  /**
   * Uploads a trail file to uploads folder and returns the path to be stored in
   * database.
   * 
   * @param req
   * @param res
   * @returns
   */
  static async uploadFile(req: Request, res: Response): Promise<Response> {
    try {
      const filepath = req.file.filename;
      if (!Trail.isTrackFile(filepath)) {
        StorageHelper.deleteFile(filepath);
        throw "Unsupported file extension";
      }
      return res.json({ filepath });
    } catch (error) {
      return res.status(400).json({ status: "error" });
    }
  }

  /**
   * Gets the trail gpx file from the trail filepath.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  static async getTrackFile(req: Request, res: Response): Promise<Response> {
    try {
      const trailFilepath = req.headers.filepath as string;
      res.sendFile(StorageHelper.getFile(trailFilepath));
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

  /**
   * Get all trails from users you follow.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  static async getDashboardTrails(req: Request, res: Response): Promise<Response> {
    const usersFollowing = await User.getFollowing(+res.locals.payload.userId);
    let trails = [];

    for (let i = 0; i < usersFollowing.length; i++) {
      const user = usersFollowing[i];
      trails = trails.concat(
        await getRepository(Trail).find({ where: { user }, relations: ["activity", "user"] })
      );
    }

    return res.json(trails);
  }

  /**
   * Get all trails that a user has uploaded.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  static async getAllByUserId(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(
        await getRepository(Trail).find({
          where: { userId: +res.locals.payload.userId },
          relations: ["activity", "user"],
        })
      );
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }
}
