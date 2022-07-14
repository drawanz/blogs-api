const services = require('../helpers/index');
const httpStatus = require('../helpers/httpStatusCode');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const response = await services.postLogin(email, password);

  if (response.message) {
    return res.status(response.status).json({ message: response.message });
  }

  return res.status(httpStatus.OK).json(response);
};

module.exports = postLogin;