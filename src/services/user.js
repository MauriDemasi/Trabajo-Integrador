const { userProvider } = require("../providers");

const createUser = async (username, email, password) => {
  const userCreated = await userProvider.createUser(username, email, password);
  return userCreated;
};

const getAllUser = async () => {
  const users = await userProvider.getAllUser();
  return users;
};

const getUsersById = async (id) => {
  const user = await userProvider.getUsersById(id);
  return user;
};

const updateUserById = async (id, username, email, password) => {
  const user = { username, email, password };
  const userUpdated = await userProvider.updateUserById(id, user);
  return userUpdated;
};

const deleteUserById = async (id) => {
  const userDeleted = await userProvider.deleteUserById(id);
  return userDeleted;
};

const loginValidate = async (fullName, password) => {
  const userFound = await userProvider.loginValidate({ fullName, password });
  return userFound;
};

module.exports = {
  createUser,
  getAllUser,
  getUsersById,
  updateUserById,
  deleteUserById,
  loginValidate,
};
