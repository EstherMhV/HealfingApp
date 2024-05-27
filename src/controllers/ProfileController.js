const Profile = require('../models/ProfileModel');

const ProfileController = {

    create: async (req, res) => {
        try {
            const profile = await Profile.create(req.body);
            res.status(201).send(profile);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    getAll: async (req, res) => {
        try {
            const profiles = await Profile.findAll();
            res.status(200).send(profiles);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    get: async (req, res) => {
        try {
            const profile = await Profile.findByPk(req.params.id);
            res.status(200).send(profile);
        } catch (error) {
            res.status(500).send(error);
        }
    },


    update: async (req, res) => {
        try {
            await Profile.update(req.body, {
                where: { id: req.params.id }
            });
            res.status(200).send('Profile updated successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },


    delete: async (req, res) => {
        try {
            await Profile.destroy({
                where: { id: req.params.id }
            });
            res.status(200).send('Profile deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = ProfileController;