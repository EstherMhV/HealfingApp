const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const ImportantNumber = mySequelize.define('importantNumber', {
    title: DataTypes.STRING,
    number: DataTypes.INTEGER,
    description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = ImportantNumber; 