'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Chars', {
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
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
    return queryInterface.dropTable('Chars');
  }
};