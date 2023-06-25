const { DataTypes } = require("sequelize");
const {sequelize} = require('../config/db-config');


 const User = sequelize.define("Users", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // role: {
  //   type: DataTypes.STRING,
  //   defaultValue: 'user',
  // },

});

sequelize.sync({ force: true }) // Esto eliminará y recreará la tabla en cada reinicio
  .then(() => {
    return User.bulkCreate([
      { username: 'admin', email: 'admin@xacademy.com', password: 'admin' },
      { username: 'user', email: 'user1@xacademy.com', password: 'user1' },
    ]);
  })
  .then(() => {
    console.log('Tabla poblada correctamente.');
  })
  .catch(err => {
    console.error('Error al poblar la tabla:', err);
  });



module.exports = User;