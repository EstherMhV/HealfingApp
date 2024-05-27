const express = require('express');
const router = express.Router();
const Profile = require('./ProfileModel');


router.get('/profiles', async (req, res) => {
    const profiles = await Profile.findAll();
    res.json(profiles);
});


router.get('/profiles/:id', async (req, res) => {
    const profile = await Profile.findByPk(req.params.id);
    res.json(profile);
});


router.post('/profiles', async (req, res) => {
    const newProfile = await Profile.create(req.body);
    res.json(newProfile);
});


router.put('/profiles/:id', async (req, res) => {
    await Profile.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Profile has been updated' });
});


router.delete('/profiles/:id', async (req, res) => {
    await Profile.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Profile has been deleted' });
});

module.exports = router;