const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post(
  '/categories',
  authToken,
  controllers.postCategories,
);

router.get(
  '/categories',
  authToken,
  controllers.getCategories,
);

module.exports = router;