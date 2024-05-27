const express = require('express');
const router = express.Router();
const ProfileController = require('./ProfileController');

router
    .route('/profiles')
    .get(ProfileController.getAll)
    .post(ProfileController.create);

router
    .route('/profiles/:id')
    .get(ProfileController.get)
    .put(ProfileController.update)
    .delete(ProfileController.delete);

module.exports = router;