import { Router } from "express";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/api/users", userRoutes)
export default routes;
