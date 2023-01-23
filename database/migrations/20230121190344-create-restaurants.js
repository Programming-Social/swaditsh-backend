"use strict";

const { WEEK_DAYS } = require('../../utilities/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("restaurants", {
      restaurant_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      restaurant_name: {
        type: Sequelize.TEXT,
      },
      restaurant_location: {
        type: Sequelize.TEXT,
      },
      opening_type: {
        type: Sequelize.TIME,
      },
      closing_type: {
        type: Sequelize.TIME,
      },
      week_days: {
        type: Sequelize.ARRAY(Sequelize.STRING(9)),
        values: WEEK_DAYS,
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
    await queryInterface.dropTable("restaurants");
  },
};
