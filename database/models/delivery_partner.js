"use strict";
const { Model } = require("sequelize");
const { GENDER, PARTNER_STATUS } = require("../../utilities/constants.js");
module.exports = (sequelize, DataTypes) => {
  class delivery_partner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.order, { foreignKey: "partener_id" });
    }
  }
  delivery_partner.init(
    {
      partener_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.TEXT,
      },
      last_name: {
        type: DataTypes.TEXT,
      },
      gender: {
        type: DataTypes.ENUM,
        values: GENDER
      },
      aadhar_number: {
        type: DataTypes.STRING(12),
      },
      orderids: {
        type: DataTypes.ARRAY(DataTypes.UUID),
      },
      partner_status: {
        type: DataTypes.ENUM,
        values: PARTNER_STATUS,
        defaultValue: PARTNER_STATUS[0],
      },
    },
    {
      sequelize,
      modelName: "delivery_partner",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
      skipSchema: true,
    }
  );
  return delivery_partner;
};
