import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { env } from "../environment";
import { User } from "../models/User";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization.split(" ")[1];
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

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getRepository(User).findOneOrFail(res.locals.payload["userId"], { where: { type: 0 } });
    next();
  } catch (err) {
    res.status(401).json({ message: "not authorized" });
  }
};

export const isAdminOrUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id  = req.headers.id || req.header("userId");
    if (!+id) return res.status(400).json("Invalid id");

    const loggedUser = await getRepository(User).findOneOrFail(res.locals.payload.userId);
    if (!(loggedUser.userId === +id || loggedUser.type === 0))
      return res.status(401).json({ status: "error" });
    next();
  } catch (err) {
    return res.status(404).json({ status: "error" });
  }
};
