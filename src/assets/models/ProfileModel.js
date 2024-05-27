const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Profile = sequelize.define('profile', {
  user_id: DataTypes.INTEGER,
  created_at: DataTypes.DATE,
  modified_at: DataTypes.DATE,
});

module.exports = Profile;