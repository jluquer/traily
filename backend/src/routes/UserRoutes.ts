import { Router } from "express";
import { verifyToken } from "../middlewares/token";
import UserController from "../controllers/UserController";

const router = Router();
const userController = new UserController();
router.get("/getAll", [verifyToken], userController.getAll);
router.get("/getOneById", [verifyToken], userController.getOneById);
router.post("/create", userController.create);
router.put("/update", [verifyToken], userController.update);
router.delete("/delete", [verifyToken], userController.delete);
router.post("/follow", [verifyToken], userController.follow);
router.delete("/unfollow", [verifyToken], userController.unfollow);
router.get("/getFollowing", [verifyToken], userController.getFollowing);
router.get("/getFollowers", [verifyToken], userController.getFollowers);
router.get("/search", [verifyToken], userController.search);

export { router as userRoutes };