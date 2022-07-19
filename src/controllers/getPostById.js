const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await services.getPostById(id);
    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }
    return res.status(httpStatus.OK).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = getPostById;