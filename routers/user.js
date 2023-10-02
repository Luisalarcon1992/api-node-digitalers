import { Router } from "express";
import { verificarToken } from "../middleware/jwt.validation.js";
import UserController from "../controllers/user.js";

export const userRouter = Router();

userRouter.post("/", verificarToken, UserController.postCreateUser);