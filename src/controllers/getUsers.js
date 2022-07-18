const services = require('../services/index');

const getUsers = async (req, res, next) => {
  try {
    const response = await services.getUsers();
    return res.status(response.status).json(response.message);
  } catch (e) {
    next(e);
  }
};

module.exports = getUsers;