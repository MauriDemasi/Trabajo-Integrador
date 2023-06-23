const {userProvider}= require ('../providers')

const loginValidate= async (fullname, password)=>{
    const userFound= await userProvider.loginValidate({fullname, password});
    return userFound;
}



module.exports= {loginValidate}
