'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createBlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    published: {
      type: DataTypes.DATE, 
      timestamps: true,
    },
    updated: {
      type: DataTypes.DATE, 
      timestamps: true,
    },
  }, {
    tableName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return BlogPost;
};

module.exports = createBlogPostModel;