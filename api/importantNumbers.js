const express = require('express');
const router = express.Router();    
const ImportantNumber = require('./ImportantNumberModel');

router.get('/importantNumbers', async (req, res) => {
    const importantNumbers = await ImportantNumber.findAll();
    res.json(importantNumbers);
});

router.get('/importantNumbers/:id', async (req, res) => {
    const importantNumber = await ImportantNumber.findByPk(req.params.id);
    res.json(importantNumber);
});

router.post('/importantNumbers', async (req, res) => {
    const newImportantNumber = await ImportantNumber.create(req.body);
    res.json(newImportantNumber);
});

router.put('/importantNumbers/:id', async (req, res) => {
    await ImportantNumber.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'ImportantNumber has been updated' });
});

router.delete('/importantNumbers/:id', async (req, res) => {
    await ImportantNumber.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'ImportantNumber has been deleted' });
});

