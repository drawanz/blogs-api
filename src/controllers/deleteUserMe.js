const services = require('../services/index');

const deleteUserMe = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const response = await services.deleteUserMe(token);
    return res.status(response.status).json();
  } catch (e) {
    next(e);
  }
};

module.exports = deleteUserMe;