import { Router } from "express";
import ActivityController from "../controllers/ActivityController";
import { isAdmin, verifyToken } from "../middlewares/auth";

const router = Router();
router.use("/create", [verifyToken, isAdmin], ActivityController.create);
router.use("/getAll", [verifyToken], ActivityController.getAll);
router.use("/getOneById", [verifyToken], ActivityController.getOneById);
router.use("/update", [verifyToken, isAdmin], ActivityController.update);
router.use("/delete", [verifyToken, isAdmin], ActivityController.delete);

export { router as activityRoutes };
