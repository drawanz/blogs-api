const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, controllers.postUser);

module.exports = router;