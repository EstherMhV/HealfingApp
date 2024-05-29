const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const User = require('./UserModel');

const Mission = sequelize.define('Mission', {
    exercice_type: DataTypes.STRING,
    reward: DataTypes.INTEGER,
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
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
    tableName: 'missions',
    timestamps: true,
    underscored: true
});


(async () => {
    try {
        await Mission.sync({ force: false });
        console.log("Modèle  Missions synchronisé avec la base de données.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table: Missions", error);
    }
})();

module.exports = Mission;