const express = require('express');
const router = express.Router();
const MissionController = require('../controllers/MissionsController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/missions')
    .get(MissionController.getAll)
    .post(MissionController.create);

router
    .route('/missions/:id')
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,MissionController.get)
    .put(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,MissionController.update)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,MissionController.delete);

module.exports = router;