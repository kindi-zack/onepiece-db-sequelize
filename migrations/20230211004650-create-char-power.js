'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('CharPowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      char_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Chars',
          key: 'id'
        },
        onDelete: 'cascade',
        onDelete: 'cascade'
      },
      power_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Powers',
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
    }, {
      uniqueKeys: {
        char_power_unique_key: {
          fields: ['char_id', 'power_id']
        }
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('CharPowers');
  }
};