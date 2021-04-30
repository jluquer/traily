import { Router } from "express";
import { activityRoutes } from "./ActivityRoutes";
import { authRoutes } from "./AuthRoutes";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/activity", activityRoutes);

export default routes;
