const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = [
  'src/routes/categoriesRoutes.js', 
  'src/routes/loginRoutes.js',
  'src/routes/postRoutes.js',
  'src/routes/userRoutes.js',
];

swaggerAutogen(outputFile, endpointsFiles);
