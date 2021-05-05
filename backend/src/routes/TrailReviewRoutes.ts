import { Router } from "express";
import TrailReviewController from "../controllers/TrailReviewController";
import { isAdminOrUser, verifyToken } from "../middlewares/auth";

const router = Router();
router.post("/create", [verifyToken], TrailReviewController.create);
router.get("/getAllByTrailId", [verifyToken], TrailReviewController.getAllByTrailId);
router.put("/update", [verifyToken], TrailReviewController.update);
router.delete("/delete", [verifyToken, isAdminOrUser], TrailReviewController.delete);

export { router as trailReviewRoutes };
