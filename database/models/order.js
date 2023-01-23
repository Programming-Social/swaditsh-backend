"use strict";
const { Model } = require("sequelize");
const { ORDER_STATUS } = require("../../utilities/constants.js");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
      // this.belongsTo(models.User, { foreignKey: "user_id" });
      // this.belongsTo(models.restaurant, { foreignKey: "restaurant_id" });
      // this.belongsTo(models.delivery_partner, {
      //   foreignKey: "partener_id",
      // });
      // this.hasMany(models.food_item, { foreignKey: "dish_id" });
    }
  }
  order.init(
    {
      order_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      order_status: {
        type: DataTypes.ENUM,
        values: ORDER_STATUS,
        defaultValue: ORDER_STATUS[0],
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      restaurant_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return order;
};
