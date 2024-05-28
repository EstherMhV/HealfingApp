const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactsController');


router
    .route('/contacts')
    .get( ContactController.getAllContacts)
    .post( ContactController.createContact);

router
    .route('/contacts/:id')
    .get( ContactController.getContact)
    .put( ContactController.updateContact)
    .delete( ContactController.deleteContact);

module.exports = router;