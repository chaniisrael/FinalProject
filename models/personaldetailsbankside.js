'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalDetailsBankSide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalDetailsBankSide.init({
    nameBank: DataTypes.STRING,
    ageLessThan18: DataTypes.BOOLEAN,
    ageBetween18And40: DataTypes.BOOLEAN,
    ageBetween40And70: DataTypes.BOOLEAN,
    ageOver70: DataTypes.BOOLEAN,
    education: DataTypes.STRING,
    employee: DataTypes.BOOLEAN,
    independent: DataTypes.BOOLEAN,
    notEmployee: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PersonalDetailsBankSide',
  });
  return PersonalDetailsBankSide;
};