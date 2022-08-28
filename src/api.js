const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routers = require('./routes/index');
const middlewares = require('./middlewares/index');
const swaggerFile = require('../swagger-output.json');

const app = express();

app.use(express.json());
app.use(routers.loginRoutes);
app.use(routers.userRoutes);
app.use(routers.categoriesRoutes);
app.use(routers.postRoutes);
app.use(middlewares.errorHandle);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
