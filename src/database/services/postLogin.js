const { User } = require('../models/index.js');
const httpStatus = require('../helpers/httpStatusCode');
const helpers = require('../helpers/index');

const validateUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { 
      status: httpStatus.BAD_REQUEST, 
      message: 'Invalid fields',
    };
  }
  return true;
};

const postLogin = (email, password) => {
  const validateObj = helpers.validateProperties({ email, password });
  const validationUser = validateUser(email, password);

  if (validateObj.message) {
    return validateObj;
  }
  if (validationUser.message) {
    return validationUser;
  }

  const token = helpers.createToken({ email });
  return { token };
};

module.exports = postLogin;