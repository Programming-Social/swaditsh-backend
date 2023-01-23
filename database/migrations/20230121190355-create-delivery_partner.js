"use strict";

const { PARTNER_STATUS, GENDER } = require('../../utilities/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("delivery_partners", {
      partener_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.TEXT,
      },
      last_name: {
        type: Sequelize.TEXT,
      },
      gender: {
        type: Sequelize.ENUM,
        values: GENDER
      },
      aadhar_number: {
        type: Sequelize.STRING(12),
      },
      partner_status: {
        type: Sequelize.ENUM,
        values: PARTNER_STATUS,
        defaultValue: PARTNER_STATUS[0],
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
    await queryInterface.dropTable("delivery_partners");
  },
};
