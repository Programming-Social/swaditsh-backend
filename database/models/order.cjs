"use strict";
const { Model } = require("sequelize");
const { ORDER_STATUS } = require("../../utilities/constants");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.User, { foreignKey: "user_id" });
      this.hasOne(models.restaurant, { foreignKey: "restaurant_id" });
      this.hasOne(models.delivery_partner, {
        foreignKey: "delivery_partner_id",
      });
      this.hasMany(models.food_item, { foreignKey: "order_items" });
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
        type: DataTypes.ARRAY(DataTypes.STRING),
        values: ORDER_STATUS,
        defaultValue: ORDER_STATUS[0],
        allowNull: false,
      },
      order_items: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
      },
      restaurant_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
      },
      delivery_partner_id: {
        type: DataTypes.UUIDV4,
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
