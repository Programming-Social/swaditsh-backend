"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("food_items", {
      dish_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dish_image: {
        type: Sequelize.TEXT,
        isURL: true,
      },
      dish_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      price: {
        type: Sequelize.REAL(11, 2),
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
    await queryInterface.dropTable("food_items");
  },
};
