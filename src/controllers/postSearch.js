const services = require('../services/index');
const httpStatus = require('../helpers/httpStatusCode');

const postSearch = async (req, res, next) => {
  try {
    const { q } = req.query;
    const response = await services.postSearch(q);
    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }
    return res.status(httpStatus.OK).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = postSearch;