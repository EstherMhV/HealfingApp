const Mission = require('../models/MissionModel');

const MissionController = {

    create: async (req, res) => {
        try {
            const mission = await Mission.create(req.body);
            res.status(201).send(mission);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const missions = await Mission.findAll();
            res.status(200).send(missions);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const mission = await Mission.findByPk(req.params.id);
            res.status(200).send(mission);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await Mission.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('Mission updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await Mission.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('Mission deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = MissionController;