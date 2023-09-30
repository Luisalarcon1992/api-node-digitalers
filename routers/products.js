import { Router } from "express";
import ProductsController from "../controllers/products.js";

export const productsRouter = Router();

productsRouter.get("/", ProductsController.getAllPrudcts);
productsRouter.get("/:id", ProductsController.getProduct);
productsRouter.post("/", ProductsController.postAddProducts);
productsRouter.post("/crear", ProductsController.createNewCollection);
