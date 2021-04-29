import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { env } from "../environment";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  let payload: any = null;

  try {
    payload = jwt.verify(token as string, env.jwtSecret);
    res.locals.payload = payload;
  } catch (err) {
    return res.status(401).json({ message: "not authorized" });
  }

  const { userId } = payload;
  const newToken = jwt.sign({ userId }, env.jwtSecret, { expiresIn: "1h" });
  res.setHeader("token", newToken);

  next();
};
