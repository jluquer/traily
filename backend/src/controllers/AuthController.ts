import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { env } from "../environment";
import { User } from "../models/User";
import * as jwt from "jsonwebtoken";

export default class AuthController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    let user: User = null;

    if (!(email && password))
      return res.status(400).json({ message: "Email and password are required!" });

    try {
      user = await getRepository(User)
        .createQueryBuilder("user")
        .addSelect("user.password")
        .where("email = :email", { email: email })
        .getOneOrFail();
    } catch (err) {
      res.status(400).json({ message: "Email or password are incorrect!" });
    }

    if (!user.checkPassword(password))
      return res.status(400).json({ message: "Email or password are incorrect!" });

    const token = jwt.sign({ userId: user.userId }, env.jwtSecret, {
      expiresIn: "1h",
    });

    res.json({ token });
  };
}
