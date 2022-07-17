const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const postPost = (req, res) => {
  console.log(req.headers.Authorization);
  const teste = services.postPost(req.headers.Authorization);
  return res.status(httpStatus.OK).json({ teste });
};

module.exports = postPost;