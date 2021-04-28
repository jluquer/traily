import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();
const userController = new UserController();
router.get("/getAll", userController.getAll);
router.get("/getOneById", userController.getOneById);
router.post("/create", userController.create);
router.put("/update", userController.update);
router.delete("/delete", userController.delete);
router.post("/follow", userController.follow);
router.delete("/unfollow", userController.unfollow);
router.get("/getFollowing", userController.getFollowing);
router.get("/getFollowers", userController.getFollowers);

export { router as userRoutes };
