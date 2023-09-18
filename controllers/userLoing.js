import { validarDatos } from "../schema/userSechema";

export default class UserController {
  static async login(req, res) {
    const { username, password } = req.body;
    res.send(`Nombre de usuario ${username} y su contraseña ${password}`);
  }
}
