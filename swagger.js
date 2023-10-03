import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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

const swaggerSepec = swaggerJSDoc(swaggerOptions);

const swaggerDocs = (app, port) => {
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSepec));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type: application/json");
    res.send(swaggerSepec);
  });
  console.log("swagger docs");
};

export default swaggerDocs;
