import jwt from 'jsonwebtoken';
import 'dotenv/config';

// Importamos la clave secreta para configurar el token
const secret = process.env.SECRET_PASSWORD;

// clase para exportar, luego podremos utilizarlo para crear y validar el token
export default class Token {
  static async createToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
  }

  static async verifiedToken(token) {
    try {
      const decoded = jwt.verify(token, secret);
      return decoded;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
