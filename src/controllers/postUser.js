const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const postUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const response = await services.postUser(displayName, email, password, image);
    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }
    return res.status(httpStatus.CREATED).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = postUser;