"use strict";

const { GENDER } = require('../../utilities/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      first_name: Sequelize.TEXT,
      last_name: Sequelize.TEXT,
      pin: {
        type: Sequelize.STRING,
        len: [6, 6],
        isNumeric: true,
      },
      email: {
        type: Sequelize.STRING,
        isEmail: true,
      },
      phone: {
        type: Sequelize.STRING,
        len: [10, 10],
        isNumeric: true,
      },
      gender: {
        type: Sequelize.ENUM,
        values: GENDER
      },
      profile_image: {
        type: Sequelize.TEXT,
        isURL: true,
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
    await queryInterface.dropTable("Users");
  },
};
