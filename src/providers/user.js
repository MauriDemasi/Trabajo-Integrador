const {User} = require('../models')

const createUser = async (user) => {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (err) {
      console.error("Error when creating User", err);
      throw err;
    }
  };


module.exports = {createUser}