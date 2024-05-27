const ImportantNumber = require('../models/ImportantNumberModel');

const ImportantNumberController = {

    create: async (req, res) => {
        try {
            const importantNumber = await ImportantNumber.create(req.body);
            res.status(201).send(importantNumber);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const importantNumbers = await ImportantNumber.findAll();
            res.status(200).send(importantNumbers);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const importantNumber = await ImportantNumber.findByPk(req.params.id);
            res.status(200).send(importantNumber);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await ImportantNumber.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('ImportantNumber updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await ImportantNumber.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('ImportantNumber deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = ImportantNumberController;