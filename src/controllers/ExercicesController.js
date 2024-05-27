const Exercice = require('../models/ExerciceModel');

const ExerciceController = {

    create: async (req, res) => {
        try {
            const exercice = await Exercice.create(req.body);
            res.status(201).send(exercice);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    getAll: async (req, res) => {
        try {
            const exercices = await Exercice.findAll();
            res.status(200).send(exercices);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const exercice = await Exercice.findByPk(req.params.id);
            res.status(200).send(exercice);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await Exercice.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('Exercice updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await Exercice.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('Exercice deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = ExerciceController;