const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const {userController} = require ('../controllers')
const { validateAuthMDW } = require('../middleware/authMiddleware');

const {SECRET}= require('../middleware/authMiddleware')

router.post('/', validateAuthMDW, userController.createUser);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

router.put('/update/:id', validateAuthMDW, userController.updateUserById);

router.delete('/delete/:id', validateAuthMDW, userController.deleteUserById);

router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Verificar si el nombre de usuario y la contraseña son correctos
    if (username === 'admin' && password === 'admin') {
      // Generar un token JWT con información sobre el usuario y su rol
      const token = jwt.sign({ username, role: 'admin' }, SECRET);
  
      // Enviar el token al cliente en la respuesta
      res.json({ token });
    } else {
      // Si el nombre de usuario o la contraseña son incorrectos, enviar un error
      res.status(401).json({ error: 'Invalid username or password' });
    }
  });


module.exports = router;