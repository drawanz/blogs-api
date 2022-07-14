const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = createToken;