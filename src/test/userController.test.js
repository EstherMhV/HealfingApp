const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../controllers/UsersController');
const User = require('../models/UserModel');

jest.mock('../models/UserModel');

const app = express();
app.use(bodyParser.json());
app.post('/users', UserController.create);
app.get('/users/login', UserController.login);
app.get('/users/:id', UserController.get);
app.get('/users/:id', UserController.getAll);
app.put('/users/:id', UserController.update);
app.delete('/users/:id', UserController.delete);

const testData = {
    id: 2,
    email: 'aaea@gmail.com',
    password: 'DOojaopwfo',
    gender: 'Femme',
    birthdate: '2020-12-12',


};

const updatedData = {
    id: 2,
    email: 'aaea@gmail.com',
    password: 'DOojaopwfo',
    gender: 'Femme',
    birthdate: '2020-12-12',

};

describe('UserController', () => {
    beforeEach(() => {
        User.create.mockClear();
        User.findAll.mockClear();
        User.findByPk.mockClear();
        User.update.mockClear();
        User.destroy.mockClear();
    });

    test('create User', async () => {
        User.create.mockResolvedValue(testData);
        const responseCreate = await request(app).post('/users').send(testData);
        expect(responseCreate.statusCode).toBe(201);
        expect(responseCreate.body).toHaveProperty('id', 2);
    });

    test('get all User', async () => {
        User.findAll.mockResolvedValue([testData]);
        const responseGetAll = await request(app).get('/users');
        expect(responseGetAll.statusCode).toBe(200);
        expect(responseGetAll.body).toEqual([testData]);
    });

    test('get User by id', async () => {
        User.findByPk.mockResolvedValue(testData);
        const responseGetById = await request(app).get(`/users/${testData.id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(responseGetById.body).toEqual(testData);
    });

    test('update User', async () => {
        User.update.mockResolvedValue([1]);
        const response = await request(app).put(`/users/${testData.id}`).send(updatedData);
        expect(response.statusCode).toBe(200);
    });

    test('delete User', async () => {
        User.destroy.mockResolvedValue(testData);
        const response = await request(app).delete(`/users/${testData.id}`);
        expect(response.statusCode).toBe(200);
    });
});