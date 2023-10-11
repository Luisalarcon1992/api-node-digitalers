import ProductModel from '../models/products.js';
import Product from '../models/schema/productSchema.js';

export default class ProductsController {
  static async getAllPrudcts(req, res) {
    const user = req.user.id;
    const allProducts = await ProductModel.getAllPrudcts(user);
    if (allProducts.length > 0) {
      return res.status(200).json(allProducts);
    }
    return res.status(200).json({ Vacio: 'La colección está sin datos' });
  }

  static async getProduct(req, res) {
    const { id } = req.params;

    const users = await ProductModel.getProduct(id);
    if (users) return res.status(200).json(users);

    return res.status(404).json({ Error: 'No se encontró el id' });
  }

  static async AddProducts(req, res) {
    const {
      name,
      description,
      publicdate,
      author,
      language,
      editorial,
      cathegory,
    } = req.body;

    const product = new Product({
      name,
      description,
      publicdate,
      author,
      language,
      editorial,
      cathegory,
      user: req.user.id, // se almacena el id del usuario que hizo la carga del producto
    });

    const created = await ProductModel.postAddProducts(product);
    if (created) {
      return res.redirect('/');
    }
    return res.status(404).json({
      Error: `No se pudo cargar los archivos`,
    });
  }

  static async createNewCollection(req, res) {
    const { name } = req.body;
    const createdNewCollection = await ProductModel.postNewCollection(name);
    if (createdNewCollection) {
      return res.redirect('/');
    }
    return res.status(404).json({
      Error: `No se pudo crear la tabla '${name}' porque ya existe un valor con el mismo nombre `,
    });
  }

  static async deleteProductById(req, res) {
    const { id } = req.params;
    const deletedDocument = await ProductModel.deleteProductById(id);
    if (deletedDocument) {
      return res.redirect('/');
    }
    return res.status(404).json({ Error: `El ${id} no existe` });
  }

  static async deleteCollection(req, res) {
    const { name } = req.params;
    const deletedCollection = await ProductModel.deleteCollection(name);
    if (deletedCollection) {
      return res
        .status(200)
        .json({ Correcto: `La colección ${name} se elimino correctamente` });
    } else {
      return res.status(404).json({ Error: `La colección ${name} no existe` });
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params;

    const productUpdated = await ProductModel.updateProduct(id, req.body);

    if (productUpdated) {
      return res.status(200).json(productUpdated);
    }

    return res.status(400).json({ Error: 'El id brindado no existe' });
  }
}
