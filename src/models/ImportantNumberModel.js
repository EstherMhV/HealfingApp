const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const ImportantNumber = sequelize.define('ImportantNumber', {
    title: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    description: DataTypes.STRING,
}, {
    tableName: 'importantNumbers',
    timestamps: true,
    underscored: true
});

(async () => {
    try {
        await ImportantNumber.sync({ force: false });
        
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table:ImportantNumbers", error);
    }
})();

module.exports = ImportantNumber;