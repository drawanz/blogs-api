const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await services.getUserById(id);
    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }
    return res.status(httpStatus.OK).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = getUserById;