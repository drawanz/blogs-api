const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (obj) => {
  const token = jwt.sign(obj, process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = createToken;