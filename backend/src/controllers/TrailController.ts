import { env } from "../environment";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";
import EntityHelper from "../libs/EntityHelper";
import { Activity } from "../models/Activity";
import { Trail } from "../models/Trail";
import { User } from "../models/User";
import StorageHelper from "../libs/StorageHelper";

export default class TrailController {
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

  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await getRepository(Trail).find());
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

  static async getOneById(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await getRepository(Trail).findOneOrFail(+req.headers.id));
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  }

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

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const trailRepository = getRepository(Trail);
      const trail = await trailRepository.findOneOrFail(+req.headers.id);
      if (trail.trailFilepath) StorageHelper.deleteFile(trail.trailFilepath);
      await trailRepository.delete(trail);
      return res.status(201).json({ status: "success" });
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

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

  static async getTrackFile(req: Request, res: Response): Promise<Response> {
    try {
      const trailFilepath = req.headers.filepath as string;
      res.sendFile(StorageHelper.getFile(trailFilepath));
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }
  static async downloadTrackFile(req: Request, res: Response): Promise<Response> {
    try {
      const trailFilepath = req.headers.filepath as string;
      res.download(StorageHelper.getFile(trailFilepath.toString()));
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }
}
