const express = require('express');
const router = express.Router();
const MissionController = require('./MissionController');

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