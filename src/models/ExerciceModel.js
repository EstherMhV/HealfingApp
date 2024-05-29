const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const Exercice = sequelize.define('Exercice', {
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM,
        values: ['Médiation', 'Respiration profonde', 'Relaxation Musculaire', 'Pleine Conscience', 'Ancrage sensoriel', 'Relaxation Auditive', 'Art thérapie'],
    },
    duration: DataTypes.INTEGER,
    reward: DataTypes.INTEGER,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    tableName: 'exercices',
    timestamps: true,
    underscored: true
});

(async () => {
    try {
        await Exercice.sync({ force: false });
        console.log("Modèle Table Exercice synchronisé avec la base de données.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table: Exercice ", error);
    }
})();

module.exports = Exercice;