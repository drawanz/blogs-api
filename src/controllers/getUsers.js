const services = require('../services/index');

const getUsers = async (req, res) => {
  const response = await services.getUsers();
  return res.status(response.status).json(response.message);
};

module.exports = getUsers;