const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const getCategories = async (req, res, next) => {
  try {
    const response = await services.getCategories();
    return res.status(httpStatus.OK).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = getCategories;