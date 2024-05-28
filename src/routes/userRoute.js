const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UsersController');

router
    .route('/')
    .get(UserController.getAll)
    .post(UserController.create);

router
    .route('/:id')
    .get(UserController.get)
    .put(UserController.update)
    .delete(UserController.delete);

router
    .route('/login')
    .post(UserController.login);

module.exports = router;