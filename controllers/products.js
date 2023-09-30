import { json } from "express";
import ProductModel from "../models/products.js";

export default class ProductsController {
  static async getAllPrudcts(req, res) {
    const users = await ProductModel.getAllPrudcts();

    return res.status(200).json(users);
  }

  static async getProduct(req, res) {
    const { id } = req.params;

    const users = await ProductModel.getProduct(id);
    if (users) return res.status(200).json(users);

    return res.status(404).json({ Error: "No se encontró el id" });
  }

  static async postAddProducts(req, res) {
    const { data } = req.body;
    const created = await ProductModel.postAddProducts(data);
    if (created) return res.status(200).json(created);
    return res.status(404).json({
      Error: `No se pudo cargar los archivos`,
    });
  }

  static async createNewCollection(req, res) {
    const { name } = req.body;
    const createdNewCollection = await ProductModel.postNewCollection(name);
    if (createdNewCollection)
      return res.status(200).json({ Exito: `Se creó la colección ${name}` });
    return res.status(404).json({
      Error: `No se pudo crear la tabla '${name}' porque ya existe un valor con el mismo nombre `,
    });
  }
}
