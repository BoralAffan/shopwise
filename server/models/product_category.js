'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.product, {
        foreignKey: "category_id",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      })
    }
  }
  product_category.init({
    title: {
      type: DataTypes.STRING,

    },
  }, {
    sequelize,
    modelName: 'product_category',
  });
  return product_category;
};