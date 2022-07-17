const httpStatus = require('../helpers/httpStatusCode');

const errorHandle = (error, _req, res, _next) => {
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
  return res
  .status(httpStatus.BAD_REQUEST)
  .json({ message: error.message });
};

module.exports = errorHandle;