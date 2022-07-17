const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post(
  '/user', 
  controllers.postUser,
);

router.get(
  '/user', 
  authToken,
  controllers.getUsers,
);

router.get(
  '/user/:id',
  authToken,
  controllers.getUserById,
);

module.exports = router;