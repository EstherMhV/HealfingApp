const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const ExercicesController = require('../controllers/ExercicesController');
const Exercice = require('../models/ExerciceModel');

jest.mock('../models/ExerciceModel');

const app = express();
app.use(bodyParser.json());
app.post('/exercices', ExercicesController.create);
app.get('/exercices', ExercicesController.getAll);
app.get('/exercices/:id', ExercicesController.get);
app.put('/exercices/:id', ExercicesController.update);
app.delete('/exercices/:id', ExercicesController.delete);

const testData = {
    id: 2,
    name: 'aaeaseges',
    content: 'Je suis la ',

};

const updatedData = {
    id: 2,
    name: 'aaeaseges',
    content: 'Je ',

};

describe('ExercicesController', () => {
    beforeEach(() => {
        Exercice.create.mockClear();
        Exercice.findAll.mockClear();
        Exercice.findByPk.mockClear();
        Exercice.update.mockClear();
        Exercice.destroy.mockClear();
    });

    test('create Exercice', async () => {
        Exercice.create.mockResolvedValue(testData);
        const responseCreate = await request(app).post('/exercices').send(testData);
        expect(responseCreate.statusCode).toBe(201);
        expect(responseCreate.body).toHaveProperty('id', 2);
    });

    test('get all Exercices', async () => {
        Exercice.findAll.mockResolvedValue([testData]);
        const responseGetAll = await request(app).get('/exercices');
        expect(responseGetAll.statusCode).toBe(200);
        expect(responseGetAll.body).toEqual([testData]);
    });

    test('get Exercice by id', async () => {
        Exercice.findByPk.mockResolvedValue(testData);
        const responseGetById = await request(app).get(`/exercices/${testData.id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(responseGetById.body).toEqual(testData);
    });

    test('update Exercice', async () => {
        Exercice.update.mockResolvedValue([1]);
        const response = await request(app).put(`/exercices/${testData.id}`).send(updatedData);
        expect(response.statusCode).toBe(200);
    });

    test('delete Exercice', async () => {
        Exercice.destroy.mockResolvedValue(testData);
        const response = await request(app).delete(`/exercices/${testData.id}`);
        expect(response.statusCode).toBe(200);
    });
});