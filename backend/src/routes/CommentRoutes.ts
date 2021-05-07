import { Router } from "express";
import CommentController from "../controllers/CommentController";
import { isAdminOrUser, verifyToken } from "../middlewares/auth";

const router = Router();

// Trail comment routes
router.post("/trail/create", [verifyToken], CommentController.createTrailComment);
router.get("/trail/getAllByTrailId", [verifyToken], CommentController.getAllByTrailId);
router.put("/trail/update", [verifyToken], CommentController.updateTrailComment);
router.delete("/trail/delete", [verifyToken, isAdminOrUser], CommentController.deleteTrailComment);

// Challenge comment routes
router.post("/challenge/create", [verifyToken], CommentController.createChallengeComment);
router.get("/challenge/getAllByChallengeId", [verifyToken], CommentController.getAllByChallengeId);
router.put("/challenge/update", [verifyToken], CommentController.updateChallengeComment);
router.delete("/challenge/delete", [verifyToken, isAdminOrUser], CommentController.deleteChallengeComment);

export { router as commentRoutes };
