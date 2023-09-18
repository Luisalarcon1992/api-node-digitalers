import { Router } from "express";
import IndexController from "../controllers/generalPage.js";

export const indexRouter = Router();

indexRouter.get("/", IndexController.get);
