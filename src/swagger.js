import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger-output.json';
const routes = ['./adapters/secondary/routes/AllRoutes.js'];

const doc = {
  info: {
    title: 'desafio-loomi',
    version: '1.0.0',
    description: 'Desafio Loomi - João Descendente',
  },
  host: 'localhost:9095',
  basePath: '/api',
  schemes: ['http', 'https'],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  security: [
    {
      Bearer: [],
    },
  ],
  apis: routes,
};

swaggerAutogen()(outputFile, routes, doc);
