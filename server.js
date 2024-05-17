const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.json(user);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});