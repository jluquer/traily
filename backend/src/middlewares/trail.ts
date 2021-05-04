import { NextFunction, Request, Response } from "express";
import { Trail } from "../models/Trail";

export const checkFileExtension = (req: Request, res: Response, next: NextFunction) => {
  try {
    const filename = req.body.trailFilepath;
    if (filename && !Trail.isTrackFile(filename)) throw "Unsupported file extension";
    next();
  } catch (err) {
    return res.status(400).json({ status: "error", message: err });
  }
};
