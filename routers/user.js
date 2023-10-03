import { Router } from "express";
import { verificarToken } from "../middleware/jwt.validation.js";
import UserController from "../controllers/user.js";

export const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Rutas relacionadas con usuarios
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     description: Inicia sesión de un usuario utilizando el correo electrónico y la contraseña.
 *     parameters:
 *       - in: body
 *         name: credentials
 *         description: Credenciales de inicio de sesión
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             mail:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '200':
 *         description: Inicio de sesión exitoso
 *       '400':
 *         description: Credenciales incorrectas o solicitud incorrecta
 */
userRouter.post("/", UserController.postCreateUser);

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     description: Crea un nuevo usuario con los datos proporcionados.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Datos del nuevo usuario
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             mail:
 *               type: string
 *             password:
 *               type: string
 *             username:
 *               type: string
 *     responses:
 *       '201':
 *         description: Usuario creado correctamente
 *       '400':
 *         description: Error en la solicitud o usuario ya existe
 */
userRouter.post("/login", verificarToken, UserController.getUser);
