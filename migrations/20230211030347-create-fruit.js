'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Fruits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      type: {
        type: Sequelize.STRING
      },
      ability: {
        type: Sequelize.STRING
      },
      charId: {
        type: Sequelize.INTEGER,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Fruits');
  }
};