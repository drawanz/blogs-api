const { Category } = require('../database/models/index.js');
const httpStatus = require('../helpers/httpStatusCode');

const postCategories = async (nameCategory) => {
  if (!nameCategory || nameCategory === '') {
    return {
      status: httpStatus.BAD_REQUEST,
      message: '"name" is required',
    };
  }

  await Category.create({ name: nameCategory });
  const findPost = await Category.findOne({ where: { name: nameCategory } });

  if (!findPost) return [];

  return findPost.dataValues;
};

module.exports = postCategories;