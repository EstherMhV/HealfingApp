const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Exercice = sequelize.define('user', {
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM,
        values: ['Médiation', 'Respiration profonde','Relaxation Musculaire','Pleine Conscience','Ancrage sensoriel','Relaxation Auditive','Art thérapie'],
    },
    duration: DataTypes.INTEGER,
    reward: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = Exercice;