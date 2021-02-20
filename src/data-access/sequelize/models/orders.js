'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orders.init({
    date_received: DataTypes.DATE,
    barcode: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity_received: DataTypes.INTEGER,
    cost_per_unit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};