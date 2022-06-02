'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BankSideProperties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameBank: {
        type: Sequelize.STRING
      },
      constructionAnomalies: {
        type: Sequelize.BOOLEAN
      },
      vacationApartment: {
        type: Sequelize.BOOLEAN
      },
      NotPurchasedFromContractorEndNoForm4: {
        type: Sequelize.BOOLEAN
      },
      purchaseInTrust: {
        type: Sequelize.BOOLEAN
      },
      theRightsSettlementProcessHasNotBeenCompleted: {
        type: Sequelize.BOOLEAN
      },
      buyersReceivers: {
        type: Sequelize.BOOLEAN
      },
      rtmentFromCPR: {
        type: Sequelize.BOOLEAN
      },
      apartmentPricePeroccupant: {
        type: Sequelize.BOOLEAN
      },
      secondHandApartment: {
        type: Sequelize.BOOLEAN
      },
      privateHouse: {
        type: Sequelize.BOOLEAN
      },
      SelfBuiltHouse: {
        type: Sequelize.BOOLEAN
      },
      field: {
        type: Sequelize.BOOLEAN
      },
      equity: {
        type: Sequelize.STRING
      },
      valueOfTheConference: {
        type: Sequelize.STRING
      },
      centerArea: {
        type: Sequelize.BOOLEAN
      },
      amountEquityRequired: {
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
    await queryInterface.dropTable('BankSideProperties');
  }
};