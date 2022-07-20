const jwt = require('jsonwebtoken');
const httpStatus = require('../helpers/httpStatusCode');
const { User, BlogPost } = require('../database/models/index.js');
require('dotenv').config();

const getUserIdFromUser = async (token) => {
  const { email } = jwt.verify(token, process.env.JWT_SECRET);
  const { dataValues } = await User.findOne({ where: { email }, attributes: ['id'] });
  return dataValues.id;
};

const getUserIdFromPost = async (id) => {
  const { dataValues } = await BlogPost.findOne({ where: { id }, attributes: ['userId'] });
  return dataValues.userId;
};

const userValidation = async (idPost, token) => {
  const userIdFromUser = await getUserIdFromUser(token);
  const userIdFromPost = await getUserIdFromPost(idPost);
  if (userIdFromUser !== userIdFromPost) {
    return { 
      status: httpStatus.UNAUTHORIZED, 
      message: 'Unauthorized user',
    };
  }
  return true;
};

const validationPost = async (id) => {
  const response = await BlogPost.findOne({ where: { id } });
  if (!response) {
    return { 
      status: httpStatus.NOT_FOUND, 
      message: 'Post does not exist',
    };
  }
  return response;
};

const deletePostById = async (idPost, token) => {
  const validatePost = await validationPost(idPost);
  if (validatePost.message) {
    return validatePost;
  }
  const validateUser = await userValidation(idPost, token);
  if (validateUser.message) {
    return validateUser;
  }
  await BlogPost.destroy({
    where: {
      id: idPost,
    },
  });
  return { status: httpStatus.NO_CONTENT };
};

module.exports = deletePostById;