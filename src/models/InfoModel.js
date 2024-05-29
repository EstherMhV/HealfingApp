const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const Info = sequelize.define('Info', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
}, {
    tableName: 'infos',
    timestamps: true,
    underscored: true
});

(async () => {
    try {
        await Info.sync({ force: false });
        console.log("Modèle Table Infos synchronisé avec la base de données.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table:Info", error);
    }
})();

module.exports = Info;