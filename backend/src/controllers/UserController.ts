import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { Follow } from "../models/Follow";
import { User } from "../models/User";

export default class UserController {
  constructor() {}

  getAll = async (req: Request, res: Response) => {
    try {
      const users = await getRepository(User).find();
      res.status(200).json(users);
    } catch {
      res.status(404).json({ status: "error" });
    }
  };

  getOneById = async (req: Request, res: Response) => {
    const { id } = req.headers;
    if (!+id) return res.status(400).json("Invalid user id");

    try {
      const users = await getRepository(User).findOneOrFail(+id);
      res.status(200).json(users);
    } catch {
      res.status(404).json({ status: "error" });
    }
  };

  create = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    const newUser = new User();
    newUser.email = email;
    newUser.name = name;
    newUser.password = password;
    newUser.type = 1;
    newUser.hashPassword();

    const errors = await validate(newUser);
    if (errors.length > 0) return res.status(400).json(errors);

    try {
      await getRepository(User).save(newUser);
      res.status(200).json({ status: "success" });
    } catch (err) {
      res.status(409).json({ message: "Email already in use" });
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.headers;
    const { name, email } = req.body;
    let userToUpdate: User = null;
    const userRepository = getRepository(User);

    try {
      const loggedUser = await userRepository.findOneOrFail(res.locals.payload.userId);
      userToUpdate = await userRepository
        .createQueryBuilder("user")
        .addSelect("user.password")
        .where("userId = :id", { id: id })
        .getOneOrFail();
      userToUpdate.name = name;
      userToUpdate.email = email;

      if (loggedUser.type === 0 && req.body.type) userToUpdate.type = req.body.type;
    } catch (err) {
      res.status(404).json({ status: "error" });
    }

    const errors = await validate(userToUpdate);
    if (errors.length > 0) return res.status(400).json(errors);

    try {
      await userRepository.save(userToUpdate);
      res.status(201).json({ status: "success" });
    } catch (err) {
      res.status(409).json({ message: "Email already in use" });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.headers;
      const userRepository = getRepository(User);
      const userToRemove = await userRepository.findOneOrFail(+id);
      await userRepository.remove(userToRemove);
      res.status(201).json({ status: "success" });
    } catch (err) {
      res.status(404).json({ status: "error" });
    }
  };

  follow = async (req: Request, res: Response) => {
    const { id } = req.headers;

    if (!+id) return res.status(400).json("Invalid user id");

    const userRepository = getRepository(User);
    const followRepository = getRepository(Follow);

    try {
      const followerUser = await userRepository.findOneOrFail(res.locals.payload.userId);

      let follow = await followRepository.findOne({
        where: { followerUserId: followerUser.userId, userId: +id },
      });

      if (follow || followerUser.userId === +id) return res.status(409).json({ status: "error" });

      const followingUser = await userRepository.findOneOrFail(+id);

      follow = new Follow();
      follow.user = followingUser;
      follow.followerUser = followerUser;

      const errors = await validate(follow);
      if (errors.length > 0) return res.status(400).json(errors);

      await getRepository(Follow).save(follow);
      res.status(200).json({ status: "success" });
    } catch (err) {
      res.status(400).json({ status: "error" });
    }
  };

  unfollow = async (req: Request, res: Response) => {
    const { id } = req.headers;
    const followRepository = getRepository(Follow);

    if (!+id) return res.status(400).json("Invalid user id");

    try {
      const follow = await followRepository
        .createQueryBuilder("follow")
        .where("followerUserId = :followerId", { followerId: res.locals.payload.userId })
        .andWhere("userId = :userId", { userId: +id })
        .getOneOrFail();

      followRepository.delete(follow);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(404).json({ message: "You do not follow this user" });
    }
  };

  getFollowing = async (req: Request, res: Response) => {
    try {
      const user = await getRepository(User).findOneOrFail(res.locals.payload.userId, {
        relations: ["follows"],
      });
      res.json(user.follows);
    } catch (err) {
      res.status(404).json({ status: "error" });
    }
  };

  getFollowers = async (req: Request, res: Response) => {
    try {
      const user = await getRepository(User).findOneOrFail(res.locals.payload.userId, {
        relations: ["followers"],
      });
      res.json(user.followers);
    } catch (err) {
      res.status(404).json({ status: "error" });
    }
  };

  search = async (req: Request, res: Response) => {
    try {
      const { name } = req.headers;

      if (!name) return res.status(400).json({ status: "error" });

      const search = await getRepository(User).find({
        name: Like(`%${name}%`),
      });
      res.json(search);
    } catch (err) {
      res.status(404).json({ status: "error" });
    }
  };
}
