import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to user routes" });
});
export default userRoutes;
