export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Endpoints para proyecto Digitalers',
      version: '1.0.0',
      descripcion: 'Probar los endpoints',
    },
  },
  apis: ['./routers/*.js'], // Rutas donde se encuentran los comentarios Swagger
};
