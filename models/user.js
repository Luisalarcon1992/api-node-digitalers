import { randomUUID } from "node:crypto";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const movies = require("../datos.json");

export default class UserModel {
  static async getUser({ username, password }) {
    return;
  }

  static async postUser({ body }) {}
}
