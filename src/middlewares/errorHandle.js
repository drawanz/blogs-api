const httpStatus = require('../helpers/httpStatusCode');

const errorHandle = (error, _req, res, next) => {
  console.log(error.message);
  if (error.message === 'jwt must be provided') {
    return res
    .status(httpStatus.UNAUTHORIZED)
    .json({ message: 'Token not found' });
  }
  if (error.message === 'jwt malformed') {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = errorHandle;