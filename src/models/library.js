const { DataTypes } = require("sequelize");
const {sequelize} = require('../config/dbConfig');
const {Book}= require('./book')

 const Library = sequelize.define("Librarys", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telfono: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Book.belongsTo(Library);
Library.hasMany(Book);


module.exports = Library;