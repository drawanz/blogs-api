const { BlogPost, User, Category } = require('../database/models/index.js');
const httpStatus = require('../helpers/httpStatusCode');

const getPostById = async (id) => {
  const user = await BlogPost.findByPk(id, { 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!user) {
    return {
      status: httpStatus.NOT_FOUND,
      message: 'Post does not exist',
    };
  }

  return user;
};

module.exports = getPostById;