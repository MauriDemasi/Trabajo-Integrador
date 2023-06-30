const { userService } = require("../services");

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ action: "createUser", error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUser();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUsersById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userService.updateUserById(
      req.params.id,
      username,
      email,
      password
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUserById(req.params.id);
    console.log("Deleted user:", deletedUser);
    res.json(deletedUser);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(400).json({ action: "deleteUserById", error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
