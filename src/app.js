// const express = require("express");
import express from "express";
import routes from "./routes/index";
import path from "path";
import http from "http";

const app = express();
const server = http.createServer(app);
app.use(express.json());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("INDEX");
});
app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found." });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server up running on port ${PORT}`));
export default server;
