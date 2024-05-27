const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Missions = mySequelize.define('diaryEntries', {
    profile_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    mood: {
        type: DataTypes.ENUM,
        values: ['En colère', 'triste', 'Mélancolique','Joyeux','Heureux','Jaloux','Déçu' ],
    },
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = Missions; 