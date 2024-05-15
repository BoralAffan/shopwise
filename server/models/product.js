'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product_category, {
        foreignKey: "category_id",
        allowNull: false,
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      })

      this.belongsToMany(models.user, {
        through: 'UserFavoriteProducts',
        as: 'favoriteUsers',
        foreignKey: 'productId',
      });
    }
  }
  product.init({
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    is_discount_available: {
      type: DataTypes.BOOLEAN,
    },
    discounted_price: {
      type: DataTypes.DOUBLE,
    },
    discount_perc: {
      type: DataTypes.INTEGER,
    },
    is_trending: {
      type: DataTypes.BOOLEAN,
    },
    total_quantity_left: {
      type: DataTypes.INTEGER,
    },
    display_image: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),

    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};