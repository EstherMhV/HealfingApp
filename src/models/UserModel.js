const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});


const Mission = require('./MissionModel');

const User = sequelize.define('profile', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.INTEGER,
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'user'],
    },
    level: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
    time_exo_done: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});


module.exports = User;