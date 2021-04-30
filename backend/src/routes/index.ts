import { Router } from "express";
import { authRoutes } from "./AuthRoutes";
import { trailRoutes } from "./TrailRoutes";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/trail", trailRoutes);

export default routes;
