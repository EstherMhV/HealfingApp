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
        console.log("Modèle Table Contact synchronisé avec la base de données.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table: Contact", error);
    }
})();

module.exports = Contact;