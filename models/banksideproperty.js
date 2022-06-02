'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankSideProperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BankSideProperty.init({
    nameBank: DataTypes.STRING,
    constructionAnomalies: DataTypes.BOOLEAN,
    vacationApartment: DataTypes.BOOLEAN,
    NotPurchasedFromContractorEndNoForm4: DataTypes.BOOLEAN,
    purchaseInTrust: DataTypes.BOOLEAN,
    theRightsSettlementProcessHasNotBeenCompleted: DataTypes.BOOLEAN,
    buyersReceivers: DataTypes.BOOLEAN,
    rtmentFromCPR: DataTypes.BOOLEAN,
    apartmentPricePeroccupant: DataTypes.BOOLEAN,
    secondHandApartment: DataTypes.BOOLEAN,
    privateHouse: DataTypes.BOOLEAN,
    SelfBuiltHouse: DataTypes.BOOLEAN,
    field: DataTypes.BOOLEAN,
    equity: DataTypes.STRING,
    valueOfTheConference: DataTypes.STRING,
    centerArea: DataTypes.BOOLEAN,
    amountEquityRequired: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BankSideProperty',
  });
  return BankSideProperty;
};