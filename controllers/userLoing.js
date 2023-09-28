import { json } from "express";
import UserModel from "../models/user.js";

export default class UserController {
  static async getAllUser(req, res) {
    const { user } = req.query;
    const users = await UserModel.getAllUser({ user });

    return res.json(users);
  }
}
