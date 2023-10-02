import {client} from "./conexionDB/db.js"

// Cambia esto según tus bd y tu collection

const db = client.db('digitalers'); 
const userCollection = db.collection('user');


// Función para insertar un usuario en la base de datos
async function insertarUsuario(usuario) {
  try {
    const client = await MongoClient.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();
    const collection = db.collection(collectionName);

    // Verificar si el usuario ya existe en la base de datos
    const usuarioExistente = await collection.findOne({ username: usuario.username });

    if (usuarioExistente) {
      client.close();
      return false; // El usuario ya existe
    }

    // Insertar el usuario en la base de datos
    await collection.insertOne(usuario);

    client.close();
    return true; // Usuario insertado correctamente
  } catch (error) {
    console.error('Error al insertar el usuario en la base de datos:', error);
    return false; // Error al insertar el usuario
  }
}

export { insertarUsuario };
