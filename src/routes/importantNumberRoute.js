const express = require('express');
const router = express.Router();
const ImportantNumberController = require('../controllers/ImportantNumberController');

router
    .route('/importantNumbers')
    .get(ImportantNumberController.getAll)
    .post(ImportantNumberController.create);

router
    .route('/importantNumbers/:id')
    .get(ImportantNumberController.get)
    .put(ImportantNumberController.update)
    .delete(ImportantNumberController.delete);

module.exports = router;