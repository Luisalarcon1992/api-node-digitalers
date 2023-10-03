import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentación de mi API",
    },
  },
  apis: ["./routers/*.js"], // Rutas donde se encuentran los comentarios Swagger
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
