"use strict";
const { Model } = require("sequelize");
const { WEEK_DAYS } = require("../../utilities/constants");
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.food_item, { foreignKey: "dishes" });
    }
  }
  restaurant.init(
    {
      restaurant_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUIDV4,
      },
      restaurant_name: {
        type: DataTypes.TEXT,
      },
      restaurant_location: {
        type: DataTypes.TEXT,
      },
      opening_type: {
        type: DataTypes.TIME,
      },
      closing_type: {
        type: DataTypes.TIME,
      },
      week_days: {
        type: DataTypes.ARRAY(DataTypes.STRING(9)),
        values: WEEK_DAYS,
      },
      dishes: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
      },
    },
    {
      sequelize,
      modelName: "restaurant",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return restaurant;
};
