const express = require('express');
const controllers = require('../controllers/index');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post(
  '/post',
  authToken,
  controllers.postPost,
);
router.get(
  '/post',
  authToken,
  controllers.getPost,
);
router.get(
  '/post/:id',
  authToken,
  controllers.getPostById,
);
router.put(
  '/post/:id',
  authToken,
  controllers.putPostById,
);

module.exports = router;