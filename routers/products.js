import { Router } from "express";
import ProductsController from "../controllers/products.js";

export const productsRouter = Router();

productsRouter.get("/", ProductsController.getAllPrudcts);
productsRouter.post("/", ProductsController.postAddProducts);
productsRouter.post("/crear", ProductsController.createNewCollection);
productsRouter.get("/:id", ProductsController.getProduct);
productsRouter.delete("/:id", ProductsController.deleteProductById);
productsRouter.delete("/collection/:name", ProductsController.deleteCollection);
