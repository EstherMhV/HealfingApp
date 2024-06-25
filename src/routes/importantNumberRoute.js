const express = require('express');
const router = express.Router();
const ImportantNumberController = require('../controllers/ImportantNumberController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/importantNumbers')
    .get(ImportantNumberController.getAll)
    .post(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, ImportantNumberController.create);

router
    .route('/importantNumbers/:id')
    .get(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, ImportantNumberController.get)
    .put(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, ImportantNumberController.update)
    .delete(jwtMiddleware.verifyToken, jwtMiddleware.verifyAdmin, ImportantNumberController.delete);

module.exports = router;