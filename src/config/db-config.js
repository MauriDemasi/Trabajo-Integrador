const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite.tp',
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida');
    await sequelize.sync();
  } catch (error) {
    console.error('Hubo un error al inicializar la base de datos', error);
  }
};

module.exports = { sequelize, initializeDB };
