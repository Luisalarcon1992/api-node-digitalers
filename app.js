import express, { json } from "express";
import { productsRouter } from "./routers/products.js";
import { indexRouter } from "./routers/generalPage.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __fileName = fileURLToPath(import.meta.url);
const __dirnName = dirname(__fileName);
export const url = path.join(__dirnName + "/views");

const app = express();

app.disable("x-powered-by");
app.use(json());
app.use(express.static(url));
app.use(express.urlencoded({ extended: true }));

app.use("/productos", productsRouter);
app.use("/", indexRouter);

app.use((req, res) => {
  res.send("<h1>404</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server funcionando en el puerto http://localhost:${PORT}`);
});
