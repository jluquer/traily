import { Router } from "express";
import TrailController from "../controllers/TrailController";
import { verifyToken } from "../middlewares/token";

const router = Router();
router.get("/getAll", [verifyToken], TrailController.getAll);
router.get("/getOneById", [verifyToken], TrailController.getOneById);
router.post("/create", TrailController.create);
router.put("/update", [verifyToken], TrailController.update);
router.delete("/delete", [verifyToken], TrailController.delete);

export { router as trailRoutes };
