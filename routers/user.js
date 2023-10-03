import { Router } from "express";
import { verificarToken } from "../middleware/jwt.validation.js";
import UserController from "../controllers/user.js";

export const userRouter = Router();

userRouter.post("/", UserController.postCreateUser);

userRouter.post("/login", verificarToken, UserController.getUser);
