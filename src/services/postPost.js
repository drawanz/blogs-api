const jwt = require('jsonwebtoken');
require('dotenv').config();

const getId = (token) => {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  return data;
};

const payload = {
  title: 'Latest updates, August 1st',
  content: 'The whole text for the blog post goes here in this key',
  categoryIds: [1, 2],
};

const postPost = () => {
  const teste = 'teste';
  return teste;
};

module.exports = postPost;