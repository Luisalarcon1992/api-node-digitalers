import express, { json } from 'express';
import { productsRouter } from './routers/products.js';
import { userRouter } from './routers/user.js';
import { frontEndRouter } from './routers/frontEnd/frontEnd.js';
import { ContactRouter } from './routers/contact.js';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger.js';
import swaggerUI from 'swagger-ui-express';
import { engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import flash from 'connect-flash';
import session from 'express-session';
import methodOverride from 'method-override';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// configuraciones
app.disable('x-powered-by');
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
  session({
    secret: 'digitalers',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(flash());
app.use(methodOverride('_method'));

app.locals.userRoll = null;
app.use((req, res, next) => {
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  res.locals.user = null;

  next();
});
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
app.use('/propiedades', productsRouter);
app.use('/user', userRouter);
app.use('/contacto', ContactRouter);
app.use('/', frontEndRouter);

// swagger
const initSwagger = () => {
  const swggerConfig = swaggerJSDoc(swaggerOptions);
  app.use('/api', swaggerUI.serve, swaggerUI.setup(swggerConfig));
};

initSwagger();

// 404 cuando no encuentra una ruta
app.use((req, res) => {
  res.redirect('/');
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, (res) => {
  console.log(`Server funcionando en el puerto http://localhost:${PORT}`);
});
