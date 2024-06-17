const express = require('express');
const router = express.Router();

const userController = require('../controllers/UsersController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/')
    .post(userController.create);

router
    .route('/login')
    .post(userController.login);

router
    .route('/getAll')
    .get(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, userController.getAll)

router
    .route('/:id')
    .get(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, userController.get)
    .put(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, userController.update)
    .delete(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, userController.delete);


module.exports = router;