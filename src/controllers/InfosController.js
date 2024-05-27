const Info = require('../models/InfoModel');

const InfoController = {

    create: async (req, res) => {
        try {
            const info = await Info.create(req.body);
            res.status(201).send(info);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    getAll: async (req, res) => {
        try {
            const infos = await Info.findAll();
            res.status(200).send(infos);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const info = await Info.findByPk(req.params.id);
            res.status(200).send(info);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await Info.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('Info updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await Info.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('Info deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = InfoController;