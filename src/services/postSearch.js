// const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
// const httpStatus = require('../helpers/httpStatusCode');
// const config = require('../database/config/config');
// const helpers = require('../helpers/index');
const { BlogPost, User, Category } = require('../database/models/index.js');
require('dotenv').config();

const { Op } = Sequelize;

const postSearch = async (term) => {
  const posts = await BlogPost.findAll({
    where: { [Op.or]: [
        { title: { [Op.like]: `%${term}%` } }, 
        { content: { [Op.like]: `%${term}%` } },
      ],
    }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

module.exports = postSearch;