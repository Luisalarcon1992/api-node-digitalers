import { ObjectId } from 'mongodb';
import { client } from './conexionDB/db.js';

const database = client.db('digitalers');
const products = database.collection('products');

export default class ProductModel {
  static async getAllPrudcts(id) {
    try {
      const nid = new ObjectId(id); // convierto el string ir del bobdy a un ObjectID

      const pipeline = [
        {
          $match: {
            user: nid,
          },
        },
        {
          $lookup: {
            from: 'user', // Reemplaza 'users' con el nombre de la colección de usuarios en tu base de datos
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $unwind: '$user',
        },
      ];

      const created = await products.aggregate(pipeline).toArray();
      return created;
    } catch (error) {
      return false;
    }
  }

  static async getProduct(id) {
    try {
      if (id) {
        const nid = new ObjectId(id); // convierto el string ir del bobdy a un ObjectID
        const query = { _id: nid }; // creo una query para buscar el la bd
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
      if (deleted.deletedCount === 1) {
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

  static async updateProduct(id, data) {
    try {
      const nid = new ObjectId(id);

      const beforeProduct = await products.findOneAndUpdate(
        {
          _id: nid,
        },
        {
          $set: data,
        },
      );

      if (!beforeProduct) {
        return false;
      }

      const updatedProduct = await products.findOne({ _id: nid });

      return updatedProduct;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
