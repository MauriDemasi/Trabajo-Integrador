const {User} = require('../models')


const loginValidate = async (options) => {
  try {
    const user = await User.findAll({
      where: {
        fullname: options.fullName,
        password: options.password
      },
      
    });

    if (user.length !== 0) {
      return user;
    }
    return false;
    
  } catch (error) {
    console.error('Error validating user', error)
    console.log('User not found');

    return false;
  }
}




module.exports = {loginValidate}