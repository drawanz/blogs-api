const express = require('express');
const routers = require('./routes/index');
const middlewares = require('./middlewares/index');

const app = express();

app.use(express.json());
app.use(routers.loginRoutes);
app.use(routers.userRoutes);
app.use(routers.categoriesRoutes);
app.use(routers.postRoutes);
app.use(middlewares.errorHandle);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
