const express = require('express');
const router = express.Router();
const MissionController = require('../controllers/MissionsController');

router
    .route('/missions')
    .get(MissionController.getAll)
    .post(MissionController.create);

router
    .route('/missions/:id')
    .get(MissionController.get)
    .put(MissionController.update)
    .delete(MissionController.delete);

module.exports = router;