const express = require('express');
const router = express.Router();
const ContactController = require('./ContactController');
const jwtMiddleware = require('./jwtMiddleware');

router
    .route('/contacts')
    .get(jwtMiddleware.verifyToken, ContactController.getAllContacts)
    .post(jwtMiddleware.verifyToken, ContactController.createContact);

router
    .route('/contacts/:id')
    .get(jwtMiddleware.verifyToken, ContactController.getContact)
    .put(jwtMiddleware.verifyToken, ContactController.updateContact)
    .delete(jwtMiddleware.verifyToken, ContactController.deleteContact);

module.exports = router;