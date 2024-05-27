const User = require('../models/UserModel');

const UserController = {

    create: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    getAll: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await User.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('User updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await User.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('User deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = UserController;