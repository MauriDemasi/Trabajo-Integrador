const {userProvider}= require ('../providers')


const createUser = async (user) => {
    return await userProvider.createUser(user)

}


module.exports= {createUser}
