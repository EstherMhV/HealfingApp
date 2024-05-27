const express = require('express');
const router = express.Router();
const User = require('./UserModel');


router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});


router.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
});


router.post('/users', async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});


router.put('/users/:id', async (req, res) => {
    await User.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'User has been updated' });
});


router.delete('/users/:id', async (req, res) => {
    await User.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'User has been deleted' });
});

module.exports = router;