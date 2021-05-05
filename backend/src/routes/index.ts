import { Router } from "express";
import { activityRoutes } from "./ActivityRoutes";
import { authRoutes } from "./AuthRoutes";
import { challengeRoutes } from "./ChallengeRoutes";
import { trailReviewRoutes } from "./TrailReviewRoutes";
import { trailRoutes } from "./TrailRoutes";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/trail", trailRoutes);
routes.use("/trail/review", trailReviewRoutes);
routes.use("/activity", activityRoutes);
routes.use("/challenge", challengeRoutes);

export default routes;
