import { Router } from "express";
import ProductsController from "../controllers/products.js";

export const productsRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Rutas relacionadas con productos
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     description: Obtiene todos los productos disponibles.
 *     tags: [Productos]
 *     responses:
 *       '200':
 *         description: Lista de productos obtenida correctamente
 *       '500':
 *         description: Error en el servidor
 */
productsRouter.get("/", ProductsController.getAllPrudcts);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Agregar un nuevo producto
 *     description: Agrega un nuevo producto con los datos proporcionados.
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Producto agregado correctamente
 *       '400':
 *         description: Error en la solicitud
 */
productsRouter.post("/", ProductsController.postAddProducts);

/**
 * @swagger
 * /productos/crear:
 *   post:
 *     summary: Crear una nueva colección de productos
 *     description: Crea una nueva colección de productos con los datos proporcionados.
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Colección de productos creada correctamente
 *       '400':
 *         description: Error en la solicitud
 */
productsRouter.post("/crear", ProductsController.createNewCollection);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     description: Obtiene un producto por su ID.
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del producto a obtener
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Producto obtenido correctamente
 *       '404':
 *         description: Producto no encontrado
 */
productsRouter.get("/:id", ProductsController.getProduct);

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     description: Elimina un producto por su ID.
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del producto a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Producto eliminado correctamente
 *       '404':
 *         description: Producto no encontrado
 */
productsRouter.delete("/:id", ProductsController.deleteProductById);

/**
 * @swagger
 * /productos/collection/{name}:
 *   delete:
 *     summary: Eliminar una colección de productos por nombre
 *     description: Elimina una colección de productos por su nombre.
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: name
 *         description: Nombre de la colección de productos a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Colección de productos eliminada correctamente
 *       '404':
 *         description: Colección de productos no encontrada
 */
productsRouter.delete("/collection/:name", ProductsController.deleteCollection);
