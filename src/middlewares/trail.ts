import { NextFunction, Request, Response } from "express";
import StorageHelper from "../libs/StorageHelper";
import { Trail } from "../models/Trail";

/**
 * Check if the file exists and if it is a gpx file, else returns an error.
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns response error
 */
export const checkFile = (req: Request, res: Response, next: NextFunction) => {
  try {
    const filename = req.body.trailFilepath;
    if (filename && !Trail.isTrackFile(filename)) throw "Unsupported file extension";
    if (filename && !StorageHelper.fileExists(filename)) throw "File doest not exist!"
    next();
  } catch (err) {
    return res.status(400).json({ status: "error", message: err });
  }
};
