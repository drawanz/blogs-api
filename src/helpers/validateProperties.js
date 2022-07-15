const httpStatus = require('./httpStatusCode');

const validateProperties = (obj) => {
  const props = Object.values(obj);

  if (props.some((e) => e === '' || e === undefined || e.length === 0)) {
    return { 
      status: httpStatus.BAD_REQUEST, 
      message: 'Some required fields are missing',
    };
  }

  return true;
};

module.exports = validateProperties;