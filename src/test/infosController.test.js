const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const infoController = require('../controllers/InfosController');
const Info = require('../models/InfoModel');

jest.mock('../models/InfoModel');

const app = express();
app.use(bodyParser.json());
app.post('/infos', infoController.create);
app.get('/infos', infoController.getAll);
app.get('/infos/:id', infoController.get);
app.put('/infos/:id', infoController.update);
app.delete('/infos/:id', infoController.delete);

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

describe('InfoController', () => {
    beforeEach(() => {
        Info.create.mockClear();
        Info.findAll.mockClear();
        Info.findByPk.mockClear();
        Info.update.mockClear();
        Info.destroy.mockClear();
    });

    test('create info', async () => {
        Info.create.mockResolvedValue(testData);
        const responseCreate = await request(app).post('/infos').send(testData);
        expect(responseCreate.statusCode).toBe(201);
        expect(responseCreate.body).toHaveProperty('id', 2);
    });

    test('get all infos', async () => {
        Info.findAll.mockResolvedValue([testData]);
        const responseGetAll = await request(app).get('/infos');
        expect(responseGetAll.statusCode).toBe(200);
        expect(responseGetAll.body).toEqual([testData]);
    });

    test('get info by id', async () => {
        Info.findByPk.mockResolvedValue(testData);
        const responseGetById = await request(app).get(`/infos/${testData.id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(responseGetById.body).toEqual(testData);
    });

    test('update info', async () => {
        Info.update.mockResolvedValue([1]);
        const response = await request(app).put(`/infos/${testData.id}`).send(updatedData);
        expect(response.statusCode).toBe(200);
    });

    test('delete info', async () => {
        Info.destroy.mockResolvedValue(testData);
        const response = await request(app).delete(`/infos/${testData.id}`);
        expect(response.statusCode).toBe(200);
    });

});