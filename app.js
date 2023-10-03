import express, { json } from "express";
import { productsRouter } from "./routers/products.js";
import { userRouter } from "./routers/user.js";
import cookieParser from "cookie-parser";
import swaggerDocs from "./swagger.js";
import swaggerUi from "swagger-ui-express";

const app = express();

app.disable("x-powered-by");
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/productos", productsRouter);
app.use("/user", userRouter);

app.use((req, res) => {
  res.send("<h1>404</h1>");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server funcionando en el puerto http://localhost:${PORT}`);
});
