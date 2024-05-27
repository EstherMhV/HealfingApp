const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = require('./UserModel');
const Mission = require('./MissionModel');

const Profile = sequelize.define('profile', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
  created_at: DataTypes.DATE,
  modified_at: DataTypes.DATE,
});

User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });

Profile.hasMany(Mission, { foreignKey: 'profileId' });
Mission.belongsTo(Profile, { foreignKey: 'profileId' });

module.exports = Profile;