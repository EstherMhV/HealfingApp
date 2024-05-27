const { Sequelize, DataTypes } = require('sequelize');
const mySequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Profile = require('./ProfileModel');

const Missions = mySequelize.define('diaryEntries', {
    profileId: {
        type: DataTypes.INTEGER,
        references: {
            model: Profile,
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
});

Profile.hasMany(DiaryEntries, { foreignKey: 'profileId' });
DiaryEntries.belongsTo(Profile, { foreignKey: 'profileId' });


module.exports = Missions; 