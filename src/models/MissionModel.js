const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = require('./UserModel');

const Mission = sequelize.define('mission', {
    exercice_type: DataTypes.STRING,
    reward: DataTypes.INTEGER,
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
    },
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = Mission;