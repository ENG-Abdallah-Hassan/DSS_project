const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const multer = require('../helper/multer')

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/',multer.uploadPhoto,multer.resizePhotoProject, userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
