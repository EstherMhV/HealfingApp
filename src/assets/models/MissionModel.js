const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Mission = mySequelize.define('mission', {
    exercice_type: DataTypes.STRING,
    reward : DataTypes.INTEGER,
    profile_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = Mission; 