const { User } = require('../database/models/index.js');
const httpStatus = require('../helpers/httpStatusCode');
const helpers = require('../helpers/index');

const validateLength = (name, password) => {
  if (name.legnth < 8) {
    return {
      status: httpStatus.BAD_REQUEST,
      message: '"displayName" length must be at least 8 characters long',
    };
  }
  if (password.legnth < 6) {
    return {
      status: httpStatus.BAD_REQUEST,
      message: '"password" length must be at least 6 characters long',
    };
  }
  return true;
};

const validateEmail = async (email) => {
  if (!email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    return {
      status: httpStatus.BAD_REQUEST,
      message: '"email" must be a valid email',
    };
  }
  const findUser = User.findOne({ where: { email } });
  if (findUser) {
    return {
      status: httpStatus.CONFLICT,
      message: 'User already registered',
    };
  }
  return true;
};

const postUser = async (displayName, email, password, image) => {
  const validationLength = validateLength(displayName, password);
  const validationEmail = await validateEmail(email);
  if (validationLength.message) {
    return validationLength;
  }
  if (validationEmail.message) {
    return validationEmail;
  }
  // const addUser = 
  await User.create({
    displayName: `${displayName}`,
    email: `${email}`,
    password: `${password}`,
    image: `${image}`,
  });
  const token = helpers.createToken({ email });
  return { token };
};

module.exports = postUser;
