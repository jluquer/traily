import { Router } from "express";
import TrailController from "../controllers/TrailController";
import StorageHelper from "../libs/StorageHelper";
import { verifyToken } from "../middlewares/auth";
import { checkFile } from "../middlewares/trail";

const router = Router();
const multer = StorageHelper.multer;

router.get("/getAll", [verifyToken], TrailController.getAll);
router.get("/getOneById", [verifyToken], TrailController.getOneById);
router.get("/getAllByUserId", [verifyToken], TrailController.getAllByUserId);
router.get("/getDashboardTrails", [verifyToken], TrailController.getDashboardTrails);
router.post("/create", [verifyToken, checkFile], TrailController.create);
router.put("/update", [verifyToken, checkFile], TrailController.update);
router.delete("/delete", [verifyToken], TrailController.delete);
router.post("/upload", [verifyToken, multer.single("file0")], TrailController.uploadFile);
router.get("/getTrackFile", [verifyToken], TrailController.getTrackFile);

export { router as trailRoutes };
