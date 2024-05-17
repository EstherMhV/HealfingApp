const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Info = mySequelize.define('info', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = Info; 