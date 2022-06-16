'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      documentRose: {
        type: Sequelize.BOOLEAN
      },
      documentProcessed: {
        type: Sequelize.BOOLEAN
      },
      errorMessage: {
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
    await queryInterface.dropTable('files');
  }
};