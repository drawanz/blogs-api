const { User } = require('../database/models/index.js');
const httpStatus = require('../helpers/httpStatusCode');

const getUserById = async (idUser) => {
  const [user] = await User.findAll({
    where: { id: `${idUser}` },
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  if (!user) {
    return {
      status: httpStatus.NOT_FOUND,
      message: 'User does not exist',
    };
  }

  return user.dataValues;
};

module.exports = getUserById;