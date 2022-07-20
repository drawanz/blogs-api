const jwt = require('jsonwebtoken');
const httpStatus = require('../helpers/httpStatusCode');
const { User } = require('../database/models/index.js');
require('dotenv').config();

const getUserId = async (token) => {
  const { email } = jwt.verify(token, process.env.JWT_SECRET);
  const { dataValues } = await User.findOne({ where: { email }, attributes: ['id'] });
  return dataValues.id;
};

const deleteUserMe = async (token) => {
  const id = await getUserId(token);
  await User.destroy({
    where: {
      id,
    },
  });
  return { status: httpStatus.NO_CONTENT };
};

module.exports = deleteUserMe;