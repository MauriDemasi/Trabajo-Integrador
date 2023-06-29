const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../config/db-config');
const Library = require('./library');

class Book extends Model {}
Book.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  libraryId: {
    type: DataTypes.INTEGER,
    allowNull: true, // Un libro puede no pertenecer a una librería
  },
}, {
  sequelize,
  modelName: 'book',
});

Library.hasMany(Book, { foreignKey: 'libraryId' });
Book.belongsTo(Library, { foreignKey: 'libraryId' });

module.exports = Book;
