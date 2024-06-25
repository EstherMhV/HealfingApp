const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const Contact = sequelize.define('Contact', {
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    linkWebsite: DataTypes.STRING,
    urlInsta: DataTypes.STRING,
}, {
    tableName: 'contacts',
    timestamps: true,
    underscored: true
});

(async () => {
    try {
        await Contact.sync({ force: false });
    } catch (error) {
        console.error('Unable to sync the model with the database', error);
    }
})();

module.exports = Contact;