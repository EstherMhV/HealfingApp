const express = require('express');
const router = express.Router();
const InfosController = require('../controllers/InfosController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/infos')
    .get(InfosController.getAll)
    .post(InfosController.create);

router
    .route('/infos/:id')
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,InfosController.get)
    .put(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,InfosController.update)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,InfosController.delete);

module.exports = router;