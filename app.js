import express, { json } from 'express';
import { productsRouter } from './routers/products.js';
import { userRouter } from './routers/user.js';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger.js';
import swaggerUI from 'swagger-ui-express';

const app = express();

app.disable('x-powered-by');
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/productos', productsRouter);
app.use('/user', userRouter);

const initSwagger = () => {
  const swggerConfig = swaggerJSDoc(swaggerOptions);
  app.use('/', swaggerUI.serve, swaggerUI.setup(swggerConfig));
};

initSwagger();

app.use((req, res) => {
  res.send('<h1>404</h1>');
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Server funcionando en el puerto http://localhost:${PORT}`);
  // swaggerDocs(app, PORT);
});
