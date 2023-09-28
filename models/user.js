import { cliente } from "./conexionDB/db.js";

const database = cliente.db("digitalers");
const pruebas = database.collection("usuarios");

export default class UserModel {
  static async getAllUser({ user }) {
    let creado = "";
    try {
      if (user) {
        const query = { user: user };
        creado = await pruebas.findOne(query);
        console.log(creado);
        return creado;
      }
      creado = pruebas.find().toArray();
      console.log(creado);
      return creado;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async postUser(user, name) {
    try {
      const doc = { user: user, name: name };

      const result = await collection.insertOne(doc);

      if (result.insertedId) return true;
    } catch (error) {
      console.log(error);
    } finally {
      cliente.close();
    }
  }
}
