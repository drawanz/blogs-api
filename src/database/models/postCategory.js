'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createPostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories', 
      through: PostCategory,
      foreignKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'post', 
      through: PostCategory,
      foreignKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = createPostCategoryModel;