import { Router } from "express";
import ChallengeController from "../controllers/ChallengeController";
import { isAdmin, verifyToken } from "../middlewares/auth";

const router = Router();

router.post("/create", [verifyToken, isAdmin], ChallengeController.create);
router.get("/getAll", [verifyToken, isAdmin], ChallengeController.getAll);
router.get("/getOneById", [verifyToken, isAdmin], ChallengeController.getOneById);
router.put("/update", [verifyToken, isAdmin], ChallengeController.update);
router.delete("/delete", [verifyToken, isAdmin], ChallengeController.delete);
router.post("/complete", [verifyToken], ChallengeController.complete);
router.get("/getCompleted", [verifyToken], ChallengeController.getCompleted);

export { router as challengeRoutes };
