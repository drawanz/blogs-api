const services = require('../services/index');

const getCategories = async (req, res) => {
  const response = await services.getCategories();
  return res.status(response.status).json(response.message);
};

module.exports = getCategories;