'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RequestsInProcesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      nameBank: {
        type: Sequelize.STRING
      },
      nameCustomer: {
        type: Sequelize.STRING
      },
      requestHeight: {
        type: Sequelize.STRING
      },
      amountOfEquity: {
        type: Sequelize.STRING
      },
      file1: {
        type: Sequelize.STRING
      },
      file2: {
        type: Sequelize.STRING
      },
      file3: {
        type: Sequelize.STRING
      },
      file4: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      applicationProcess: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('RequestsInProcesses');
  }
};