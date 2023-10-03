import { MongoClient } from 'mongodb';
import 'dotenv/config';

// Crea una conexión, en tu archivo .env y crea la conexión con URI y tu conexión a mongodb

const uri = process.env.URI;

export const client = new MongoClient(uri);
