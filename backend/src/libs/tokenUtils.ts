import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { env } from "../environment";
import { User } from "../models/User";

export async function getUserFromToken(token: string): Promise<User | null> {
  try {
    const payload = jwt.verify(token, env.jwtSecret);
    return await getRepository(User).findOneOrFail(payload["userId"]);
  } catch (err) {
    console.log(err);
    return null;
  }
}