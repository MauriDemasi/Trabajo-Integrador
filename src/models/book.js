const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/db-config');

const Book = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    // validate: {
    //   isISBN(value) {
    //     if (!validator.isISBN(value)) {
    //       throw new Error('Invalid ISBN');
    //     }
    //   }
    // }
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
  library: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Book;
