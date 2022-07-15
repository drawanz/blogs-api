const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');
const middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/', 
  controllers.postUser,
);

router.get(
  '/',
  authToken,
  middlewares.errorHandle, 
  controllers.getUsers,
);

router.get(
  '/:id',
  authToken,
  middlewares.errorHandle, 
  controllers.getUserById,
);

module.exports = router;