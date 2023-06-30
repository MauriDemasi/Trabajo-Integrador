const express = require('express');
const {libraryController} = require('../controllers');
const { validateAuthMDW } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', validateAuthMDW, libraryController.createLibrary );
router.post('/:id/book', validateAuthMDW, libraryController.createBookFromLibrary);


router.get('/', libraryController.getLibrariesByCriteria );

router.put('/update/:id', validateAuthMDW, libraryController.updateLibraryById);

router.delete('/delete/:id', validateAuthMDW, libraryController.deleteLibraryById )


module.exports = router ;
