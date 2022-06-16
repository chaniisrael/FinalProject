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
      bankName: {
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
      centerArea: {
        type: Sequelize.BOOLEAN
      },
      northRegionArea: {
        type: Sequelize.BOOLEAN
      },
      southernArea: {
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
    await queryInterface.dropTable('BankSideProperties');
  }
};