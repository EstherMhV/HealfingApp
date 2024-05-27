const express = require('express');
const router = express.Router();
const ExerciceController = require('./ExerciceController');

router
    .route('/exercices')
    .get(ExerciceController.getAll)
    .post(ExerciceController.create);

router
    .route('/exercices/:id')
    .get(ExerciceController.get)
    .put(ExerciceController.update)
    .delete(ExerciceController.delete);

module.exports = router;