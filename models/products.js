import { ObjectId } from "mongodb";
import { client } from "./conexionDB/db.js";

const database = client.db("digitalers");
const products = database.collection("products");

export default class ProductModel {
  static async getAllPrudcts() {
    let created = "";
    try {
      created = products.find().toArray();
      return created;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async getProduct(id) {
    try {
      console.log(id);
      if (id) {
        const nid = new ObjectId(id);
        const query = { _id: nid };
        const result = products.findOne(query);
        return result;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async postAddProducts(data) {
    try {
      const result = await products.insertOne(data);
      //const query = { _id: result.insertedId };
      //const search = products.findOne(query);
      console.log(result);
      //if (result.insertedId) return search;
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  static async postNewCollection(name) {
    const exist = await database.listCollections({ name: name }).toArray();

    if (exist.length > 0) {
      return false;
    } else {
      const products = database.createCollection(name);

      if (products) return products;
      return false;
    }
  }
}
