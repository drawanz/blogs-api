const express = require('express');
const controllers = require('../controllers/index');

const router = express.Router();

router.post(
  '/', 
  controllers.postLogin,
);

module.exports = router;