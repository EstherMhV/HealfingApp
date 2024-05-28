const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const MissionExercice = sequelize.define('missionExercice', {
    missionId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'missions',
            key: 'id',
        },
    },
    exerciceId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'exercices',
            key: 'id',
        },
    },
});

module.exports = MissionExercice;