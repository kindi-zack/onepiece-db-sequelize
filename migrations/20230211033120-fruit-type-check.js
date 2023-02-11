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
      type: 'check',
      name: 'check_fruit',
      fields: ['type'],
      where: {
        type: {
          [Sequelize.Op.in]: ['Zoan', 'Logia', 'Paramecia']
        }
      }
    })
  },

   down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('Fruits', 'check_fruit')
  }
};
