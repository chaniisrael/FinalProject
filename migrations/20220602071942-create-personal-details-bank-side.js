'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PersonalDetailsBankSides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameBank: {
        type: Sequelize.STRING
      },
      ageLessThan18: {
        type: Sequelize.BOOLEAN
      },
      ageBetween18And40: {
        type: Sequelize.BOOLEAN
      },
      ageBetween40And70: {
        type: Sequelize.BOOLEAN
      },
      ageOver70: {
        type: Sequelize.BOOLEAN
      },
      education: {
        type: Sequelize.STRING
      },
      employee: {
        type: Sequelize.BOOLEAN
      },
      independent: {
        type: Sequelize.BOOLEAN
      },
      notEmployee: {
        type: Sequelize.BOOLEAN
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PersonalDetailsBankSides');
  }
};