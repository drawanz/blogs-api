const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const postCategories = async (req, res) => {
  const { name } = req.body;
  const response = await services.postCategories(name);

  if (response.message) {
    return res.status(response.status).json({ message: response.message });
  }

  return res.status(httpStatus.CREATED).json(response);
};

module.exports = postCategories;