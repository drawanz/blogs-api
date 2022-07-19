const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const httpStatus = require('../helpers/httpStatusCode');
const config = require('../database/config/config');
const helpers = require('../helpers/index');
const { User, BlogPost, Category } = require('../database/models/index.js');
require('dotenv').config();

const sequelize = new Sequelize(config.development);

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

const updatePost = async (idPost, title, content) => {
  const t = await sequelize.transaction();
  try {
    await BlogPost.update({ title, content }, { where: { id: idPost }, transaction: t });
    const post = await BlogPost.findByPk(idPost, { 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
      transaction: t,
    });
    await t.commit();
    return post;
  } catch (e) {
    await t.rollback();
  }
};

const putPostById = async (idPost, title, content, token) => {
  const validateProps = helpers.validateProperties({ title, content });
  const validateUser = await userValidation(idPost, token);
  if (validateProps.message) {
    return validateProps;
  }
  if (validateUser.message) {
    return validateUser;
  }

  const update = await updatePost(idPost, title, content);
  return update;
};

module.exports = putPostById;