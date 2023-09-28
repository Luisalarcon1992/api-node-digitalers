import { Router } from "express";
import UserController from "../controllers/userLoing.js";

export const userRouter = Router();

userRouter.get("/", UserController.getAllUser);
