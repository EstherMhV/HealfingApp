const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Constact = mySequelize.define('contact', {
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    number: DataTypes.NUMBER,
    link_website: DataTypes.STRING,
    url_insta: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = Constact; 