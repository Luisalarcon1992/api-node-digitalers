import { Router } from "express";

export const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("Ingresaste por el get");
});

userRouter.post("/", (req, res) => {
  res.send("Petición recibida");
});
