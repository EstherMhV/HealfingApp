const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const News = mySequelize.define('news', {
    title: DataTypes.STRING,
    article: DataTypes.TEXT,
    date: DataTypes.DATE,
    picture: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = News; 