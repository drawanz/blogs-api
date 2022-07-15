const { User } = require('../database/models/index.js');
const httpStatus = require('../helpers/httpStatusCode');

const getUsers = async () => {
  const getAllUsers = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  const allUsers = getAllUsers.map((e) => e.dataValues);
  return {
    status: httpStatus.OK,
    message: allUsers,
  };
};

module.exports = getUsers;