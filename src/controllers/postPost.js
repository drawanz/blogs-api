const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const postPost = async (req, res) => {
  const token = req.headers.authorization;
  const post = req.body;
  const response = await services.postPost(token, post);
  // if (response.message) {
  //   return res.status(response.message).json({ message: response.message });
  // }
  return res.status(httpStatus.CREATED).json(response);
};

module.exports = postPost;