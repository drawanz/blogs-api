'use strict';

/**
 * @param {import('sequelize').queryInterface } queryInterface 
 * @param {import('sequelize').Sequelize} Sequelize 
*/

const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()'),
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.droptable('BlogPosts')
  }
};
