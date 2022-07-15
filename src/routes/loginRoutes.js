const express = require('express');
// const authToken = require('../middlewares/authToken');
// const middlewares = require('../middlewares');
const controllers = require('../controllers/index');

const router = express.Router();

router.post(
  '/', 
  // authToken, 
  // middlewares.errorHandle,
  controllers.postLogin,
);

module.exports = router;