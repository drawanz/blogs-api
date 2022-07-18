const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await services.postLogin(email, password);
    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }
    return res.status(httpStatus.OK).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = postLogin;