'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Fruits', {
      fields: ['charId'],
      type: 'foreign key',
      name: 'fk_charId',
      references: {
        table: 'Chars',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

   down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('Fruits', 'fk_charId');
  }
};
