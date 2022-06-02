'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkDetailsBankSide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkDetailsBankSide.init({
    nameBank: DataTypes.STRING,
    seniorityInWork: DataTypes.STRING,
    businessSeniority: DataTypes.STRING,
    seniorityInOffice: DataTypes.STRING,
    seniorityInRecentWork: DataTypes.STRING,
    lastWorkEndTime: DataTypes.STRING,
    averageMonthlyIncome: DataTypes.STRING,
    plus: DataTypes.BOOLEAN,
    deviation: DataTypes.BOOLEAN,
    typeOfIncome: DataTypes.STRING,
    typeOfCommitment: DataTypes.STRING,
    checks: DataTypes.BOOLEAN,
    subordinatedLoans: DataTypes.BOOLEAN,
    execution: DataTypes.BOOLEAN,
    limitedAccount: DataTypes.BOOLEAN,
    lessThanHaifYear: DataTypes.BOOLEAN,
    betweenHaifYearAndYear: DataTypes.BOOLEAN,
    betweenOnYearAndThreeYears: DataTypes.BOOLEAN,
    OverHisYears: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'WorkDetailsBankSide',
  });
  return WorkDetailsBankSide;
};