import { Router } from "express";
import TrailController from "../controllers/TrailController";
import StorageHelper from "../libs/StorageHelper";
import { verifyToken } from "../middlewares/auth";

const router = Router();
const multer = StorageHelper.multer;

router.get("/getAll", [verifyToken], TrailController.getAll);
router.get("/getOneById", [verifyToken], TrailController.getOneById);
router.post("/create", [verifyToken], TrailController.create);
router.put("/update", [verifyToken], TrailController.update);
router.delete("/delete", [verifyToken], TrailController.delete);
router.post("/upload", [verifyToken, multer.single("file0")], TrailController.uploadFile);

export { router as trailRoutes };
