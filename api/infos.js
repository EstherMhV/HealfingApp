const express = require('express');
const router = express.Router();
const Infos = require('./InfoModel');

router.get('/infos', async (req, res) => {
    const infos = await Infos.findAll();
    res.json(infos);
});

router.get('/infos/:id', async (req, res) => {
    const info = await Infos.findByPk(req.params.id);
    res.json(info);
});

router.post('/infos', async (req, res) => {
    const newInfo = await Infos.create(req.body);
    res.json(newInfo);
});

router.put('/infos/:id', async (req, res) => {
    await Infos.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Info has been updated' });
});

router.delete('/infos/:id', async (req, res) => {    
    await Infos.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Info has been deleted' });
});

module.exports = router;