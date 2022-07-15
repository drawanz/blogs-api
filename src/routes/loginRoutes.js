const express = require('express');
const authToken = require('../middlewares/authToken');
const controllers = require('../controllers/index');
const middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/', 
  authToken, 
  middlewares.errorHandle,
  controllers.postLogin,
);

module.exports = router;