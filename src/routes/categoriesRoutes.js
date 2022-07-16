const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');
const middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  authToken,
  middlewares.errorHandle, 
  controllers.postCategories,
);

router.get(
  '/',
  authToken,
  middlewares.errorHandle, 
  controllers.getCategories,
);

module.exports = router;