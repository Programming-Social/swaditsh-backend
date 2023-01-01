"use strict";
const { Model } = require("sequelize");
const { GENDER } = require("../../utilities/constants");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.order, { foreignKey: "orders" });
    }
  }
  User.init(
    {
      user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      first_name: DataTypes.TEXT,
      last_name: DataTypes.TEXT,
      pin: {
        type: DataTypes.STRING,
        len: [6, 6],
        isNumeric: true,
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true,
      },
      phone: {
        type: DataTypes.STRING,
        len: [10, 10],
        isNumeric: true,
      },
      gender: {
        type: DataTypes.ENUM(...GENDER),
      },
      profile_image: {
        type: DataTypes.TEXT,
        isURL: true,
      },
      orders: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return User;
};
