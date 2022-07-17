const express = require('express');
const controllers = require('../controllers/index');

const router = express.Router();

router.post(
  '/login', 
  controllers.postLogin,
);

module.exports = router;