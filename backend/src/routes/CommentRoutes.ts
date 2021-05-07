import { Router } from "express";

const router = Router();

// Trail comment routes
router.post("/comment/trail/create");
router.get("/comment/trail/getAllByTrailId");
router.put("/comment/trail/update");
router.delete("/comment/trail/delete");

// Challenge comment routes
router.post("/comment/challenge/create");
router.get("/comment/challenge/getAllByChallengeId");
router.put("/comment/challenge/update");
router.delete("/comment/challenge/delete");

export { router as commentRoutes };
