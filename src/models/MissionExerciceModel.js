const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const Mission = require('./MissionModel');
const Exercice = require('./ExerciceModel');


const MissionExercice = sequelize.define('MissionExercice', {
    missionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Mission,
            key: 'id',
        },
    },
    exerciceId: {
        type: DataTypes.INTEGER,
        references: {
            model: Exercice,
            key: 'id',
        },
    },
}, {
    tableName: 'missionsExercices',
    timestamps: true,
    underscored: true
});

(async () => {
    try {
        await MissionExercice.sync({ force: false });
        console.log("Modèle Table MissionsExercices synchronisé avec la base de données.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table: MissionsExercices", error);
    }
})();

module.exports = MissionExercice;