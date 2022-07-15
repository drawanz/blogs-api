const express = require('express');
const authToken = require('../middlewares/authToken');
const controllers = require('../controllers/index');

const router = express.Router();

router.post('/', authToken, controllers.postLogin);

module.exports = router;