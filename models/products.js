import { ObjectId } from "mongodb";
import { client } from "./conexionDB/db.js";
import { query } from "express";

const database = client.db("digitalers");
const products = database.collection("products");

export default class ProductModel {
  static async getAllPrudcts() {
    try {
      const created = products.find().toArray();
      return created;
    } catch (error) {
      return false;
    }
  }

  static async getProduct(id) {
    try {
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
      const addedPost = await products.insertOne(data);
      const query = { _id: addedPost.insertedId };
      const result = await products.findOne(query);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async postNewCollection(name) {
    const exist = await database.listCollections({ name: name }).toArray();
    if (!exist.length > 0) {
      const products = database.createCollection(name);
      return products;
    }
    return false;
  }

  static async deleteProductById(id) {
    try {
      const nid = new ObjectId(id);
      const query = { _id: nid };
      const deleted = await products.deleteOne(query);
      if (deleted.deletedCount == 1) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteCollection(name) {
    try {
      const exist = await database.listCollections({ name: name }).toArray();
      if (exist.length > 0) {
        const result = await database.dropCollection(name);
        return result;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
