import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.rout.js";

import path from "path";
import { Console, log } from "console";

dotenv.config();

mongoose
  .connect(process.env.MONO_URI)
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => res.send("Hello World"));

app.listen(3000, () => console.log("listening at port 3000!!"));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

console.log(path.join(__dirname + "/views"));

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
