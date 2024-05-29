const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const User = require('./UserModel');


const DiaryEntries = sequelize.define('DiaryEntries', {
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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    tableName: 'diaryEntries',
    timestamps: true,
    underscored: true
});

(async () => {
    try {
        await DiaryEntries.sync({ force: false });
        console.log("Modèle Table DiaryEntries synchronisé avec la base de données.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table:DiaryEntries", error);
    }
})();

module.exports = DiaryEntries;