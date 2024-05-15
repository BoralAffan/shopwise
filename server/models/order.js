'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.product, {
        through: 'OrderProducts',
        as: 'orderedProducts',
        foreignKey: 'orderId',
      });
      this.belongsTo(models.user, {
        foreignKey: "user_id",
        allowNull: false,
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      })
    }
  }
  order.init({
    total_price: {
      type: DataTypes.DOUBLE
    },

    order_status: {
      type: DataTypes.ENUM("orderd", "packed", "out for delivery", "completed")
    },
    payment_method: {
      type: DataTypes.ENUM("cod", "online")
    },
    discount_applied: {
      type: DataTypes.BOOLEAN
    },
    discounted_total_price: {
      type: DataTypes.DOUBLE
    },
    discount_perc: {
      type: DataTypes.INTEGER
    },
    is_trending: {
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};