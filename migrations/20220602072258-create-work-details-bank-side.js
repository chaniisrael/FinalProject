'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkDetailsBankSides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameBank: {
        type: Sequelize.STRING
      },
      seniorityInWork: {
        type: Sequelize.STRING
      },
      businessSeniority: {
        type: Sequelize.STRING
      },
      seniorityInOffice: {
        type: Sequelize.STRING
      },
      seniorityInRecentWork: {
        type: Sequelize.STRING
      },
      lastWorkEndTime: {
        type: Sequelize.STRING
      },
      averageMonthlyIncome: {
        type: Sequelize.STRING
      },
      plus: {
        type: Sequelize.BOOLEAN
      },
      deviation: {
        type: Sequelize.BOOLEAN
      },
      typeOfIncome: {
        type: Sequelize.STRING
      },
      typeOfCommitment: {
        type: Sequelize.STRING
      },
      checks: {
        type: Sequelize.BOOLEAN
      },
      subordinatedLoans: {
        type: Sequelize.BOOLEAN
      },
      execution: {
        type: Sequelize.BOOLEAN
      },
      limitedAccount: {
        type: Sequelize.BOOLEAN
      },
      lessThanHaifYear: {
        type: Sequelize.BOOLEAN
      },
      betweenHaifYearAndYear: {
        type: Sequelize.BOOLEAN
      },
      betweenOnYearAndThreeYears: {
        type: Sequelize.BOOLEAN
      },
      OverHisYears: {
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
    await queryInterface.dropTable('WorkDetailsBankSides');
  }
};