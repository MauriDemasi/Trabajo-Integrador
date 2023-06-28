

const {User} = require('../models')

// const userModule = require('../providers/user');
// console.log('Módulo user.js cargado:', userModule);



// const createUsers = () => {
//   return User.bulkCreate([
//     { username: 'admin', email: 'admin@xacademy.com', password: 'admin' },
//     { username: 'user', email: 'user1@xacademy.com', password: 'user1' },
//   ]);
// };


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
