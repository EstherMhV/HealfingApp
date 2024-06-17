const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const User = require('./models/UserModel');
const app = express();
const port = process.env.PORT;


require('./models/MissionModel');
require('./models/ExerciceModel');
require('./models/MissionExerciceModel');
require('./models/Associations');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const userRoute = require('./routes/userRoute');
app.use('/users', userRoute);

const newsRoute = require('./routes/newsRoute');
app.use('/news', newsRoute);

const missionRoute = require('./routes/missionRoute');
app.use('/missions', missionRoute);

const infoRoute = require('./routes/infoRoute');
app.use('/infos', infoRoute);

const importantNumberRoute = require('./routes/importantNumberRoute');
app.use('/importantNumbers', importantNumberRoute);

const exerciceRoute = require('./routes/exerciceRoute');
app.use('/exercices', exerciceRoute);

const diaryEntryRoute = require('./routes/diaryEntryRoute');
app.use('/diaryEntries', diaryEntryRoute);

const contactRoute = require('./routes/contactRoute');
app.use('/contacts', contactRoute);



sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => console.log(`Server is running on port ${port}`));
});