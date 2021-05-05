import { Router } from "express";
import { activityRoutes } from "./ActivityRoutes";
import { authRoutes } from "./AuthRoutes";
import { trailReviewRoutes } from "./TrailReviewRoutes";
import { trailRoutes } from "./TrailRoutes";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/trail", trailRoutes);
routes.use("/trail/review", trailReviewRoutes);
routes.use("/activity", activityRoutes);

export default routes;
