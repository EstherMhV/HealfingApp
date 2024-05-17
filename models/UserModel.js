const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'user'],
    },
    level: DataTypes.INTEGER,
    experience: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

module.exports = User;