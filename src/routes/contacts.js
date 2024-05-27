const express = require('express');
const router = express.Router();
const Contact = require('./ContactModel');

router.get('/contacts', async (req, res) => {
    const contacts = await Contact.findAll();
    res.json(contacts);
});

router.get('/contacts/:id', async (req, res) => {
    const contact = await Contact.findByPk(req.params.id);
    res.json(contact);
});

router.post('/contacts', async (req, res) => {
    const newContact = await Contact.create(req.body);
    res.json(newContact);
});

router.put('/contacts/:id', async (req, res) => {
    await Contact.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Contact has been updated' });
});

router.delete('/contacts/:id', async (req, res) => {
    await Contact.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Contact has been deleted' });
});

module.exports = router;