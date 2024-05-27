const express = require('express');
const router = express.Router();
const Mission = require('./MissionModel');

router.get('/missions', async (req, res) => {
    const missions = await Mission.findAll();
    res.json(missions);
});

router.get('/missions/:id', async (req, res) => {
    const mission = await Mission.findByPk(req.params.id);
    res.json(mission);
});

router.post('/missions', async (req, res) => {
    const newMission = await Mission.create(req.body);
    res.json(newMission);
});

router.put('/missions/:id', async (req, res) => {
    await Mission.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Mission has been updated' });
}); 

router.delete('/missions/:id', async (req, res) => {
    await Mission.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Mission has been deleted' });
}); 

module.exports = router;