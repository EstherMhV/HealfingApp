const express = require('express');
const router = express.Router();
const UserController = require('./UserController');

router
    .route('/users')
    .get(UserController.getAll)
    .post(UserController.create);

router
    .route('/users/:id')
    .get(UserController.get)
    .put(UserController.update)
    .delete(UserController.delete);

router
    .route('/users/login')
    .post(UserController.login);

module.exports = router;