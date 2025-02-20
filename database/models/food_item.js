"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class food_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.food_category, { foreignKey: "category_id" });
      // this.hasOne(models.restaurant, { foreignKey: "restaurant_id" });
    }
  }
  food_item.init(
    {
      dish_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dish_image: {
        type: DataTypes.TEXT,
        isURL: true,
      },
      dish_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      price: {
        type: DataTypes.REAL(11, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "food_item",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return food_item;
};
