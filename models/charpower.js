'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharPower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CharPower.init({
    char_id: DataTypes.INTEGER,
    power_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharPower',
  });
  return CharPower;
};