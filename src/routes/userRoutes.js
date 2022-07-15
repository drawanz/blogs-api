const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');
const errorHandle = require('../middlewares/errorHandle');

const router = express.Router();

router.post(
    '/', 
    authToken, 
    errorHandle, 
    controllers.postUser,
);

module.exports = router;