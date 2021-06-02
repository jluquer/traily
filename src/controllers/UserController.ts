import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { Follow } from "../models/Follow";
import { User } from "../models/User";

export default class UserController {
  constructor() {}

  /**
   * Get all users from database.
   * 
   * @param req 
   * @param res 
   * @returns
   */
  getAll = async (req: Request, res: Response) => {
    try {
      const users = await getRepository(User).find();
      return res.status(200).json(users);
    } catch {
      return res.status(404).json({ status: "error" });
    }
  };

  /**
   * Get one user by id in headers. If it can't find any user
   * it will fail.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
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

  /**
   * Creates a new user with the password hashed to enhance security.
   * @param req 
   * @param res 
   * @returns 
   */
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

  /**
   * Updates a user.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
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
      return res.status(404).json({ status: "error" });
    }

    const errors = await validate(userToUpdate);
    if (errors.length > 0) return res.status(400).json(errors);

    try {
      await userRepository.save(userToUpdate);
      return res.status(201).json({ status: "success" });
    } catch (err) {
      return res.status(409).json({ message: "Email already in use" });
    }
  };

  /**
   * Delete only one user by its id if the id exist and only belongs
   * to a user.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.headers;
      const userRepository = getRepository(User);
      const userToRemove = await userRepository.findOneOrFail(+id);
      await userRepository.remove(userToRemove);
      return res.status(201).json({ status: "success" });
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  };

  /**
   * Creates a new follow relationship. The user id from token will be the
   * follower user and the user id in headers will be the followed user.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
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

  /**
   * It will remove the row where the user from api token is following the
   * user from headers id.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
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

  /**
   * Get all the users followed by the user from api token.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  async getFollowing(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await User.getFollowing(+res.locals.payload.userId));
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

  /**
   * Get all the followers from the api token user.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  async getFollowers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await getRepository(Follow).find({
        where: { userId: +res.locals.payload.userId },
        relations: ["followerUser"],
      });
      return res.json(users.map((user) => user.followerUser));
    } catch (err) {
      return res.status(404).json({ status: "error" });
    }
  }

  /**
   * Search a user by name.
   * 
   * @param req 
   * @param res 
   * @returns 
   */
  async search(req: Request, res: Response): Promise<Response> {
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
