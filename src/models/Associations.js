const Mission = require('./MissionModel');
const Exercice = require('./ExerciceModel');
const MissionExercice = require('./MissionExerciceModel');
const DiaryEntries = require('./DiaryEntriesModel');
const User = require('./UserModel');

Exercice.belongsToMany(Mission, { through: MissionExercice, as: 'ExerciceMissions' });
Mission.belongsToMany(Exercice, { through: MissionExercice, as: 'MissionExercices' });

User.hasMany(Mission, { foreignKey: 'userId', as: 'UserMissions' });
Mission.belongsTo(User, { foreignKey: 'userId', as: 'MissionUser' });

User.hasMany(DiaryEntries, { foreignKey: 'userId', as: 'UserDiaryEntries' });
DiaryEntries.belongsTo(User, { foreignKey: 'userId', as: 'DiaryEntriesUser' });