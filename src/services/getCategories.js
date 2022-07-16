const { Category } = require('../database/models/index.js');

const getCategories = async () => {
  const findPosts = await Category.findAll({ 
    attributes: ['id', 'name'],
  });

  if (!findPosts) return [];

  const allPosts = findPosts.map((e) => e.dataValues);

  return allPosts;
};

module.exports = getCategories;