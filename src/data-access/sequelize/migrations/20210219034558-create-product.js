'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      sub_description: {
        type: Sequelize.STRING
      },
      quantity_in_stock: {
        type: Sequelize.INTEGER
      },
      unit_price: {
        type: Sequelize.DECIMAL
      },
      barcode: {
        type: Sequelize.INTEGER
      },
      supplier_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};