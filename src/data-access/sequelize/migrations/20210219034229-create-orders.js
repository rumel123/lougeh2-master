'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_received: {
        type: Sequelize.DATE
      },
      barcode: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      quantity_received: {
        type: Sequelize.INTEGER
      },
      cost_per_unit: {
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
    await queryInterface.dropTable('orders');
  }
};