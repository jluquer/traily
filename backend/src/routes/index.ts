import { Router } from "express";
import { activityRoutes } from "./ActivityRoutes";
import { authRoutes } from "./AuthRoutes";
import { challengeRoutes } from "./ChallengeRoutes";
import { commentRoutes } from "./CommentRoutes";
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
routes.use("/comment", commentRoutes);

export default routes;
