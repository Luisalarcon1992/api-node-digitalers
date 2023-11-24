import { client } from './conexionDB/db.js';

const database = client.db('digitalers');
const products = database.collection('Contacts');

export default class ContactModel {
  static async postContact(data) {
    try {
      const addedPost = await products.insertOne(data);
      const query = { _id: addedPost.insertedId };
      const result = await products.findOne(query);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
