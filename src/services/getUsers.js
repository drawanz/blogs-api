const { User } = require('../database/models/index.js');
const httpStatus = require('../helpers/httpStatusCode');

const getUsers = async () => {
  const [getAllUsers] = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return {
    status: httpStatus.OK,
    message: [getAllUsers.dataValues],
  };
};

getUsers().then((r) => console.log(r));

module.exports = getUsers;