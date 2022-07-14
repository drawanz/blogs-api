'use strict';

/**
 * @param {import('sequelize').queryInterface } queryInterface 
 * @param {import('sequelize').Sequelize} Sequelize 
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'password', {
    allowNull: false,
    type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'password');
  }
};
