const { DataTypes } = require("sequelize");
const {sequelize} = require('../config/db-config');


 const User = sequelize.define("Users", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
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
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

sequelize.sync({ force: true }) // Esto eliminará y recreará la tabla en cada reinicio
  .then(() => {
    return User.bulkCreate([
      { fullName: 'admin', email: 'admin@xacademy.com', password: 'admin', isAdmin: true   },
      { fullName: 'user', email: 'user1@xacademy.com', password: 'user1' },

      // Añade más registros según sea necesario
    ]);
  })
  .then(() => {
    console.log('Tabla poblada correctamente.');
  })
  .catch(err => {
    console.error('Error al poblar la tabla:', err);
  });



module.exports = User;