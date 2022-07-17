const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post(
  '/post',
  authToken,
  controllers.postPost,
);

module.exports = router;