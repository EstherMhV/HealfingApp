const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/NewsController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/news')
    .get(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, NewsController.getAll)
    .post(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, NewsController.create);

router
    .route('/news/:id')
    .get(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, NewsController.get)
    .put(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, NewsController.update)
    .delete(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, NewsController.delete);

module.exports = router; 