import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

export default class ActivityController {
  /**
   * Creates a new activity checking if its a valid activity.
   * 
   * @param req 
   * @param res 
   * @returns response error or success
   */
  static create = async (req: Request, res: Response) => {
    try {
      const { activity } = req.body;
      const newActivity = new Activity();
      newActivity.activity = activity;

      const errors = await validate(newActivity);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(Activity).save(newActivity);
      res.json({ status: "success" });
    } catch (err) {
      res.status(400).json({ status: "error" });
    }
  };

  /**
   * Get all activities from database.
   * 
   * @param req 
   * @param res 
   * @returns response error or success
   */
  static getAll = async (req: Request, res: Response) => {
    try {
      return res.json(await getRepository(Activity).find());
    } catch (err) {
      return res.status(400).json({ status: "error" });
    }
  };

  /**
   * Get one activity by id. Returns an error if it finds more than one 
   * activity.
   * 
   * @param req 
   * @param res 
   * @returns response error or activity
   */
  static getOneById = async (req: Request, res: Response) => {
    const { id } = req.headers;
    if (!+id) return res.status(400).json({ message: "invalid id" });

    try {
      return res.json(await getRepository(Activity).findOneOrFail(+id));
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  };

  /**
   * Update an activity.
   * 
   * @param req 
   * @param res 
   * @returns response success or error
   */
  static update = async (req: Request, res: Response) => {
    const { id } = req.headers;
    if (!+id) return res.status(400).json({ message: "invalid id" });

    const { activity } = req.body;
    const activityRepository = getRepository(Activity);
    let activityToUpdate: Activity;

    try {
      activityToUpdate = await activityRepository.findOneOrFail(+id);
      activityToUpdate.activity = activity;

      const errors = await validate(activityToUpdate);
      if (errors.length > 0) return res.status(400).json(errors);
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }

    try {
      await activityRepository.save(activityToUpdate);
      res.status(201).json({ status: "success" });
    } catch (err) {
      res.status(400).json({ status: "error" });
    }
  };

  /**
   * Delete only one activity.
   * 
   * @param req 
   * @param res 
   * @returns response error or success
   */
  static delete = async (req: Request, res: Response) => {
    const { id } = req.headers;
    if (!+id) return res.status(400).json({ message: "invalid id" });

    try {
      const activityRepository = getRepository(Activity);
      const activityToDelete = await activityRepository.findOneOrFail(+id);
      activityRepository.delete(activityToDelete);
      res.status(201).json({ status: "success" });
    } catch (err) {
      res.status(404).json({ status: "error" });
    }
  };
}
