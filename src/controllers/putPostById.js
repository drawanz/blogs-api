const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const putPostById = async (req, res, next) => {
  try {
    const idPost = req.params.id;
    const { title, content } = req.body;
    const token = req.headers.authorization;
    const response = await services.putPostById(idPost, title, content, token);
    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }
    return res.status(httpStatus.OK).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = putPostById;