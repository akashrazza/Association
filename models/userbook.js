'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userbook.init({
    UserDetailId: DataTypes.INTEGER,
    booksId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userbook',
    timestamps:false
  });
  return userbook;
};