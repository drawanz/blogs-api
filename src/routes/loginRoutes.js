const express = require('express');
const authToken = require('../middlewares/authToken');
const controllers = require('../controllers/index');
const errorHandle = require('../middlewares/errorHandle');

const router = express.Router();

router.post(
  '/', 
  authToken, 
  errorHandle, 
  controllers.postLogin,
);

module.exports = router;