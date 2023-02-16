'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fruit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fruit.belongsTo(models.Char, { foreignKey: 'charId'})
    }
  }
  Fruit.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        // notEmpty: true
        notEmpty: {
          args: true,
          msg: 'Name is Required !!!'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['Logia', 'Paramecia', 'Zoan']],
          msg: 'Type Must be Logia or Paramecia or Zoan'
        }
      }
    },
    ability: DataTypes.STRING,
    charId: DataTypes.INTEGER
  }, {
    hooks:{
      // beforeCreate(instance, opt) {
      //  return instance.name = instance.name + ' belong to char id ' + instance.charId 
      // }
    },
    sequelize,
    modelName: 'Fruit',
  });
  return Fruit;
};