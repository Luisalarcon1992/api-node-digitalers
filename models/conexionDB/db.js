import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.uri;

export const cliente = new MongoClient(uri);
