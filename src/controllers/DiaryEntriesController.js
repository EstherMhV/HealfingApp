const DiaryEntries = require('../models/DiaryEntriesModel');

const DiaryEntriesController = {

    create: async (req, res) => {
        try {
            const diaryEntry = await DiaryEntries.create(req.body);
            res.status(201).send(diaryEntry);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    getAll: async (req, res) => {
        try {
            const diaryEntries = await DiaryEntries.findAll();
            res.status(200).send(diaryEntries);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const diaryEntry = await DiaryEntries.findByPk(req.params.id);
            res.status(200).send(diaryEntry);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await DiaryEntries.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('DiaryEntry updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await DiaryEntries.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('DiaryEntry deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = DiaryEntriesController;