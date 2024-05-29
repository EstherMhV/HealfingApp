const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsersController');


router
.route('/create')
.post(userController.create);

router
.route('/login')
.post(userController.login);

router
    .route('/')
    .get(userController.getAll)

router
    .route('/:id')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.delete);


module.exports = router;