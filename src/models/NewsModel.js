const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const News = sequelize.define('News', {
    title: DataTypes.STRING,
    article: DataTypes.TEXT,
    date: DataTypes.DATE,
    picture: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
},{
    tableName: 'news',
    timestamps: true,
    underscored: true
});

(async () => {
    try {
        await News.sync({ force: false });
        console.log("Modèle Table News synchronisé avec la base de données.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation du modèle Table: News", error);
    }
})();

module.exports = News;