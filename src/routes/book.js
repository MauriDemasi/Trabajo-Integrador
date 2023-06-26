const express = require('express');
const {bookController} = require('../controllers');
const { validateAuthMDW } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', validateAuthMDW, bookController.createBook )


module.exports = router ;
