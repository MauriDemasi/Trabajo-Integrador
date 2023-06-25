const {userProvider}= require ('../providers')

const loginValidate= async (fullName, password)=>{
    const userFound= await userProvider.loginValidate({fullName, password});
    return userFound;
}



module.exports= {loginValidate}
