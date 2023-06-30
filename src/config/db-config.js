const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./TPdatabase.sqlite",
});

const initializeDB = async () => {
  try {
    sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida");
    await sequelize.sync();
  } catch (error) {
    console.error("Hubo un error al inicializar la base de datos", error);
  }
};

module.exports = { sequelize, initializeDB };
