'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  delivery.init({
    data_received: DataTypes.DATE,
    product_id: DataTypes.INTEGER,
    quantity_received: DataTypes.INTEGER,
    cost_per_unit: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'delivery',
  });
  return delivery;
};