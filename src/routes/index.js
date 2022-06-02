import express from "express";
import home from "./api/home.route";
import userRoutes from "./api/user.route";

const routes = express.Router();

routes.use("/home", home);
routes.use("/users", userRoutes);
export default routes;
