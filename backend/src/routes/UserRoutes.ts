import { Router } from "express";
import { isAdminOrUser, verifyToken } from "../middlewares/auth";
import UserController from "../controllers/UserController";

const router = Router();
const userController = new UserController();
router.get("/getAll", [verifyToken], userController.getAll);
router.get("/getOneById", [verifyToken], userController.getOneById);
router.post("/create", userController.create);
router.put("/update", [verifyToken, isAdminOrUser], userController.update);
router.delete("/delete", [verifyToken, isAdminOrUser], userController.delete);
router.post("/follow", [verifyToken], userController.follow);
router.delete("/unfollow", [verifyToken], userController.unfollow);
router.get("/getFollowing", [verifyToken], userController.getFollowing);
router.get("/getFollowers", [verifyToken], userController.getFollowers);
router.get("/search", [verifyToken], userController.search);

export { router as userRoutes };
