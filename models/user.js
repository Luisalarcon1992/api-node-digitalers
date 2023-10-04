import { client } from './conexionDB/db.js';

// Cambia esto según tus bd y tu collection

const db = client.db('digitalers');
const userCollection = db.collection('user');

// Función para insertar un usuario en la base de datos
export default class UserModel {
  static async createUser(user) {
    try {
      // Verificar si el usuario ya existe en la base de datos
      const usuarioExistente = await userCollection.findOne({
        username: user.username,
      });

      const userMailExist = await userCollection.findOne({
        mail: user.mail,
      });

      if (usuarioExistente) {
        return false; // El usuario ya existe
      }

      if (userMailExist) {
        return false; // El mail ya existe
      }

      // Insertar el usuario en la base de datos
      const userCreated = await userCollection.insertOne(user);

      return userCreated; // Usuario insertado correctamente
    } catch (error) {
      console.error('Error al insertar el usuario en la base de datos:', error);
      return false; // Error al insertar el usuario
    }
  }

  static async getUserMail(mail) {
    const existMail = await userCollection.findOne({
      mail: mail,
    });

    if (existMail) {
      return existMail;
    }

    return false;
  }
}
