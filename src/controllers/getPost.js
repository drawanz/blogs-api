const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const getPost = async (req, res, next) => {
  try {
    console.log('requisitou no controller');
    const response = await services.getPost();
    return res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = getPost;