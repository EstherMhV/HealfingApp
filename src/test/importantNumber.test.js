const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const ImportantNumberController = require('../controllers/ImportantNumberController');
const ImportantNumber = require('../models/ImportantNumberModel');

jest.mock('../models/ImportantNumberModel');

const app = express();
app.use(bodyParser.json());
app.post('/importantNumbers', ImportantNumberController.create);
app.get('/importantNumbers', ImportantNumberController.getAll);
app.get('/importantNumbers/:id', ImportantNumberController.get);
app.put('/importantNumbers/:id', ImportantNumberController.update);
app.delete('/importantNumbers/:id', ImportantNumberController.delete);

const testData = {
    id: 2,
    title: 'aaeaseges',
    phone_number: 15969604,
    description: 'efef',

};

const updatedData = {
    id: 2,
    title: 'aeges',
    phone_number: 4,
    description: 'efef',

};

describe('ImportantNumberController', () => {
    beforeEach(() => {
        ImportantNumber.create.mockClear();
        ImportantNumber.findAll.mockClear();
        ImportantNumber.findByPk.mockClear();
        ImportantNumber.update.mockClear();
        ImportantNumber.destroy.mockClear();
    });

    test('create ImportantNumber', async () => {
        ImportantNumber.create.mockResolvedValue(testData);
        const responseCreate = await request(app).post('/importantNumbers').send(testData);
        expect(responseCreate.statusCode).toBe(201);
        expect(responseCreate.body).toHaveProperty('id', 2);
    });

    test('get all importantNumbers', async () => {
        ImportantNumber.findAll.mockResolvedValue([testData]);
        const responseGetAll = await request(app).get('/importantNumbers');
        expect(responseGetAll.statusCode).toBe(200);
        expect(responseGetAll.body).toEqual([testData]);
    });

    test('get ImportantNumber by id', async () => {
        ImportantNumber.findByPk.mockResolvedValue(testData);
        const responseGetById = await request(app).get(`/importantNumbers/${testData.id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(responseGetById.body).toEqual(testData);
    });

    test('update ImportantNumber', async () => {
        ImportantNumber.update.mockResolvedValue([1]);
        const response = await request(app).put(`/importantNumbers/${testData.id}`).send(updatedData);
        expect(response.statusCode).toBe(200);
    });

    test('delete ImportantNumber', async () => {
        ImportantNumber.destroy.mockResolvedValue(testData);
        const response = await request(app).delete(`/importantNumbers/${testData.id}`);
        expect(response.statusCode).toBe(200);
    });
});