import ProductsController from '../controllers/products.js';

export async function allData(req, res, next) {
  const result = await ProductsController.getAllPrudcts();
  if (result) {
    res.data = result;
    next();
  }
}
