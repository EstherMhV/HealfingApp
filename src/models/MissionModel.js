const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Profile = require('./ProfileModel');
const Exercice = require('./ExerciceModel');
const MissionExercice = require('./MissionExerciceModel');

const Mission = sequelize.define('mission', {
    exercice_type: DataTypes.STRING,
    reward: DataTypes.INTEGER,
    profileId: {
        type: DataTypes.INTEGER,
        references: {
            model: Profile,
            key: 'id',
        }
    },
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
});

Profile.hasMany(Mission, { foreignKey: 'profileId' });
Mission.belongsTo(Profile, { foreignKey: 'profileId' });

Mission.belongsToMany(Exercice, { through: MissionExercice });
Exercice.belongsToMany(Mission, { through: MissionExercice });

module.exports = Mission;