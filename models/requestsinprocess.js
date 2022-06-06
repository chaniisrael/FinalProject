'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequestsInProcess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RequestsInProcess.init({
    nameBank: DataTypes.STRING,
    nameCustomer: DataTypes.STRING,
    requestHeight: DataTypes.STRING,
    amountOfEquity: DataTypes.STRING,
    file1: DataTypes.STRING,
    file2: DataTypes.STRING,
    file3: DataTypes.STRING,
    file4: DataTypes.STRING,
    remarks: DataTypes.STRING,
    applicationProcess: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'RequestsInProcess',
  });
  return RequestsInProcess;
};