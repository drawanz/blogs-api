const postLogin = require('./postLogin');
const postUser = require('./postUser');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const postCategories = require('./postCategories');
const getCategories = require('./getCategories');
const postPost = require('./postPost');
const getPost = require('./getPost');
const getPostById = require('./getPostById');
const putPostById = require('./putPostById');
const deletePostById = require('./deletePostById');

module.exports = {
  postLogin,
  postUser,
  getUsers,
  getUserById,
  postCategories,
  getCategories,
  postPost,
  getPost,
  getPostById,
  putPostById,
  deletePostById,
};