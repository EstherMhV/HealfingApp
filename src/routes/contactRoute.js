const express = require('express');
const router = express.Router();
const ContactsController = require('../controllers/ContactsController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/contacts')
    .get( ContactsController.getAllContacts)
    .post( jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ContactsController.createContact);

router
    .route('/contacts/:id')
    .get( jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ContactsController.getContact)
    .put( jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ContactsController.updateContact)
    .delete( jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,ContactsController.deleteContact);

module.exports = router;