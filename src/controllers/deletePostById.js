const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const deletePostById = async (req, res, next) => {
  try {
    const idPost = req.params.id;
    const token = req.headers.authorization;
    const response = await services.deletePostById(idPost, token);
    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }
    return res.status(httpStatus.NO_CONTENT).json();
  } catch (e) {
    next(e);
  }
};

module.exports = deletePostById;