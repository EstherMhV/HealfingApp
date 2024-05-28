const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = require('./UserModel');

const DiaryEntries = mySequelize.define('diaryEntries', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
    },
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    mood: {
        type: DataTypes.ENUM,
        values: ['En colère', 'triste', 'Mélancolique', 'Joyeux', 'Heureux', 'Jaloux', 'Déçu'],
    },
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
})


User.hasMany(DiaryEntries, { foreignKey: 'userId' });
DiaryEntries.belongsTo(User, { foreignKey: 'userId' });


module.exports = DiaryEntries; 