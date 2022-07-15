const express = require('express');
const controllers = require('../controllers/index');

const router = express.Router();

router.post('/', controllers.postUser);

module.exports = router;