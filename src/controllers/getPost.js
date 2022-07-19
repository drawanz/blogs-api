const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const getPost = async (req, res, next) => {
  try {
    const response = await services.getPost();
    return res.status(httpStatus.OK).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = getPost;