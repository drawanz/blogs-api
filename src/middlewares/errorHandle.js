const httpStatus = require('../helpers/httpStatusCode');

const errorHandle = (error, _req, _res, _next) => {
  if (error.message === 'jwt must be provided') {
    return {
      status: httpStatus.UNAUTHORIZED,
      message: 'Token not found',
    };
  }
  if (error.message === 'jwt malformed') {
    return {
      status: httpStatus.UNAUTHORIZED,
      message: 'Expired or invalid token',
    };
  }
};

module.exports = errorHandle;