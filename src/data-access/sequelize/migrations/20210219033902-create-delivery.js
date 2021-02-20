'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('deliveries', {
      delivery_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_received: {
        type: Sequelize.DATE
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      quantity_received: {
        type: Sequelize.INTEGER
      },
      cost_per_unit: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('deliveries');
  }
};