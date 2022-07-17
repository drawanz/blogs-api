const express = require('express');
const routers = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/login', routers.loginRoutes);
app.use('/user', routers.userRoutes);
app.use('/categories', routers.categoriesRoutes);
app.use('/post', routers.postRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
