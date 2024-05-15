'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here



      this.belongsToMany(models.product, {
        through: 'UserFavoriteProducts',
        as: 'fav_products',
        foreignKey: 'userId',
      });

      this.hasMany(models.order, {
        foreignKey: "user_id",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      })

    }
  }
  user.init({

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },

    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,

    },
    device_token: {
      type: DataTypes.STRING,

    },
    profile_picture: {
      type: DataTypes.STRING,

    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};