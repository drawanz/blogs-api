const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const getUserById = async (req, res) => {
  const { id } = req.params;
  const response = await services.getUserById(id);

  if (response.message) {
    return res.status(response.status).json(response.message);
  }

  return res.status(httpStatus.OK).json(response);
};

module.exports = getUserById;