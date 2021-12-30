'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  books.init({
    name: DataTypes.STRING,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'books',
  });
  books.associate = models =>{
    books.belongsToMany(models.UserDetails, {
      through: 'userbook',
      foreignKey: 'booksId',
      otherKey: 'UserDetailId'
    });
  }
  return books;
};