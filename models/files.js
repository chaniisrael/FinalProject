'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  files.init({
    email: DataTypes.STRING,
    file1: DataTypes.STRING,
    file2: DataTypes.STRING,
    file3: DataTypes.STRING,
    file4: DataTypes.STRING,
    documentRose: DataTypes.BOOLEAN,
    documentProcessed: DataTypes.BOOLEAN,
    errorMessage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'files',
  });
  return files;
};