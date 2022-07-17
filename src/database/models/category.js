'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createCategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    }, {
      tableName: 'Categories',
      timestamps: false,
    });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      foreignKey: 'id',
    });
  };

  return Category;
};

module.exports = createCategoryModel;