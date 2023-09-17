import express, { json } from "express";
import { userRouter } from "./routers/userLogin.js";
import { indexRouter } from "./routers/index.js";

const app = express();

app.disable("x-powered-by");
app.use(json());

app.use("/user", userRouter);
app.use("/", indexRouter);

app.use((req, res) => {
  res.send("<h1>404</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server funcionando en el puerto http://localhost:${PORT}`);
});
