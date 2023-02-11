'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Char extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Char.belongsTo(models.Team, { foreignKey: 'team_id' })
      Char.belongsToMany(models.Power, { 
        through: 'CharPowers',
        foreignKey: 'char_id'
      })
      
      Char.hasOne(models.Fruit, { foreignKey: 'charId' })
    }
  }
  Char.init({
    name: DataTypes.STRING,
    team_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Char',
  });
  return Char;
};