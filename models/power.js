'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Power.belongsToMany(models.Char, {
        through: 'CharPowers',
        foreignKey: 'power_id'
      })
    }
  }
  Power.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Power',
  });
  return Power;
};