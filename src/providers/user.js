const { User } = require("../models");
const { sequelize } = require("../config/db-config");

const populateTableUser = async () => {
  sequelize
    .sync({ force: true })
    .then(() => {
      return User.bulkCreate([
        { username: "admin", email: "admin@xacademy.com", password: "admin" },
        { username: "user", email: "user1@xacademy.com", password: "user1" },
      ]);
    })
    .then(() => {
      console.log("Tabla poblada correctamente.");
    })
    .catch((err) => {
      console.error("Error al poblar la tabla:", err);
    });
};

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.error("The user could not be created due to an error.", error);
    throw error;
  }
};

const getAllUser = async () => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["deletedAt"] },
    });
    return users;
  } catch (error) {
    console.error("The users could not be listed due to an error.", error);
    throw error;
  }
};

const getUsersById = async (id) => {
  try {
    const users = await User.findAll({
      where: {
        id: id,
      },
      attributes: { exclude: ["deletedAt"] },
    });
    return users;
  } catch (error) {
    console.error("The users could not be listed due to an error.", error);
    throw error;
  }
};

const updateUserById = async (id, user) => {
  try {
    await User.update(user, {
      where: {
        id: id,
      },
    });
    const updatedUser = await User.findByPk(id);
    return updatedUser;
  } catch (error) {
    console.error(
      "El usuario no pudo ser actualizado debido a un error.",
      error
    );
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const deletedUser = await User.findOne({
      where: {
        id: id,
      },
    });
    await User.destroy({
      where: {
        id: id,
      },
    });
    return deletedUser;
  } catch (error) {
    console.error("El usuario no pudo ser eliminado debido a un error.", error);
    throw error;
  }
};

const loginValidate = async (options) => {
  try {
    const user = await User.findAll({
      where: {
        fullname: options.fullName,
        password: options.password,
      },
    });

    if (user.length !== 0) {
      return user;
    }
    return false;
  } catch (error) {
    console.error("Error validating user", error);
    console.log("User not found");

    return false;
  }
};

module.exports = {
  populateTableUser,
  createUser,
  getAllUser,
  getUsersById,
  updateUserById,
  deleteUserById,
  loginValidate,
};
