const express = require('express');
const router = express.Router();
const ExerciceController = require('../controllers/ExercicesController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/exercices')
    .get(ExerciceController.getAll)
    .post(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ExerciceController.create);

router
    .route('/exercices/:id')
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ExerciceController.get)
    .put(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ExerciceController.update)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ExerciceController.delete);

module.exports = router;