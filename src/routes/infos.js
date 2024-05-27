const express = require('express');
const router = express.Router();
const InfosController = require('./InfosController');

router
    .route('/infos')
    .get(InfosController.getAll)
    .post(InfosController.create);

router
    .route('/infos/:id')
    .get(InfosController.get)
    .put(InfosController.update)
    .delete(InfosController.delete);

module.exports = router;