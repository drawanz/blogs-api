const jwt = require('jsonwebtoken');
require('dotenv').config();

const authToken = (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = authToken;