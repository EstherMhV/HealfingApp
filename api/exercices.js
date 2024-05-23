const express = require('express');
const router = express.Router();
const Exercices = require('./ExerciceModel');
const { route } = require('./users');

router.get('/exercices', async (req, res) => {
    const exercices = await Exercices.findAll();
    res.json(exercices);
});

router.get('/exercices/:id', async (req, res) => {
    const exercice = await Exercices.findByPk(req.params.id);
    res.json(exercice);
});

router.post('/exercices', async (req, res) => {
    const newExercice = await Exercices.create(req.body);
    res.json(newExercice);
});

router.put('/exercices/:id', async (req, res) => {
    await Exercices.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Exercice has been updated' });
});

router.delete('/exercices/:id', async (req, res) => {
    await Exercices.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Exercice has been deleted' });
});


