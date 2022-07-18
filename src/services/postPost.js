const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const httpStatus = require('../helpers/httpStatusCode');
const config = require('../database/config/config');
const helpers = require('../helpers/index');
const { User, BlogPost, PostCategory } = require('../database/models/index.js');
require('dotenv').config();

const sequelize = new Sequelize(config.development);

const validateArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return { 
      status: httpStatus.BAD_REQUEST, 
      message: '"categoryIds" not found',
    };
  }
  return true;
};

const getId = async (token) => {
  const { email } = jwt.verify(token, process.env.JWT_SECRET);
  const { dataValues } = await User.findOne({ where: { email: `${email}` }, attributes: ['id'] });
  return dataValues.id;
};

const createPost = async (token, { title, content, categoryIds }) => {
  const t = await sequelize.transaction();
  try {
    const id = await getId(token);
    const { dataValues } = await BlogPost
      .create({ title, content, userId: id }, { transaction: t });
    const postId = dataValues.id;
    await Promise.all(categoryIds.map((categoryId) => PostCategory
      .create({ postId, categoryId }, { transaction: t })));
    await t.commit();
    return dataValues;
  } catch (e) {
    console.log(e);
    await t.rollback();
  }
};

const postPost = async (token, { title, content, categoryIds }) => {
  const validateProps = helpers.validateProperties({ title, content, categoryIds });
  const validateCategory = validateArray(categoryIds);
  if (validateProps.message) {
    return validateProps;
  }
  if (validateCategory.message) {
    return validateCategory;
  }
  const post = await createPost(token, { title, content, categoryIds });
  return post;
};

module.exports = postPost;
