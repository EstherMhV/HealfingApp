const Mission = require('./MissionModel');
const Exercice = require('./ExerciceModel');
const MissionExercice = require('./MissionExerciceModel');
const User = require('./UserModel');

Exercice.belongsToMany(Mission, { through: MissionExercice });
Mission.belongsToMany(Exercice, { through: MissionExercice });

User.hasMany(Mission, { foreignKey: 'userId' });
Mission.belongsTo(User, { foreignKey: 'userId' });
