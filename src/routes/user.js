const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const {userService} = require ('../services')

const {secret}= require('../middleware/authMiddleware')

router.post('/user/login', async (req, res) => {
    const { fullname, password } = req.body;

    if (fullname === "admin" && password === "admin") {
        const token = jwt.sign({ fullname, role : "admin" }, secret, {} );
        return res.json({ token });
    } else{
        const userFound= await userService.loginValidate(fullname,password)
        if(userFound){
            const token = jwt.sign({ fullname, role : "user" }, secret, {} );
            return res.json({ token });
        }
        return res.status(401).json({ error: "Please check your credentials" });
    }    
}) ;


module.exports = router;