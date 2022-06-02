import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to user routes" });
});
userRoutes.get("/:id", (req, res) => {
  res.status(200).json({ message: "Specific user" });
});
export default userRoutes;
