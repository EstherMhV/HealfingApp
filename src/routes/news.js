const express = require('express');
const router = express.Router();
const NewsController = require('./NewsController');

router
    .route('/news')
    .get(NewsController.getAll)
    .post(NewsController.create);

router
    .route('/news/:id')
    .get(NewsController.get)
    .put(NewsController.update)
    .delete(NewsController.delete);

module.exports = router;