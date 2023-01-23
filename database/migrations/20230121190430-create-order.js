"use strict";

const { ORDER_STATUS } = require('../../utilities/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      order_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      order_status: {
        type: Sequelize.ENUM,
        values: ORDER_STATUS,
        defaultValue: ORDER_STATUS[0],
        allowNull: false,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      restaurant_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
