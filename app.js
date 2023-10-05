import express, { json } from 'express';
import { productsRouter } from './routers/products.js';
import { userRouter } from './routers/user.js';
import { frontEndRouter } from './routers/frontEnd/frontEnd.js';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger.js';
import swaggerUI from 'swagger-ui-express';
import { engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// configuraciones
app.disable('x-powered-by');
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  }),
);
app.set('view engine', '.hbs');

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// rutas
app.use('/productos', productsRouter);
app.use('/user', userRouter);
app.use('/prueba', frontEndRouter);

// swagger
const initSwagger = () => {
  const swggerConfig = swaggerJSDoc(swaggerOptions);
  app.use('/', swaggerUI.serve, swaggerUI.setup(swggerConfig));
};

initSwagger();

// 404 cuando no encuentra una ruta
app.use((req, res) => {
  res.send('<h1>404</h1>');
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Server funcionando en el puerto http://localhost:${PORT}`);
  // swaggerDocs(app, PORT);
});
