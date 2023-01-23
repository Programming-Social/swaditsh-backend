"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class food_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  food_category.init(
    {
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "food_category",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return food_category;
};
