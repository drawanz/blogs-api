const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const getCategories = async (req, res) => {
  const response = await services.getCategories();
  return res.status(httpStatus.OK).json(response);
};

module.exports = getCategories;