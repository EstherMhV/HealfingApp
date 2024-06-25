const News = require('../models/NewsModel');

const NewsController = {

    create: async (req, res) => {
        try {
            const news = await News.create(req.body);
            res.status(201).send(news);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const news = await News.findAll();
            res.status(200).send(news);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const news = await News.findByPk(req.params.id);
            res.status(200).send(news);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await News.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('News updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await News.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('News deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = NewsController;