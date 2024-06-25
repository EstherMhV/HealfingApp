const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const MissionController = require('../controllers/MissionsController');
const Mission = require('../models/MissionModel');

jest.mock('../models/MissionModel');

const app = express();
app.use(bodyParser.json());
app.post('/missions', MissionController.create);
app.get('/missions', MissionController.getAll);
app.get('/missions/:id', MissionController.get);
app.put('/missions/:id', MissionController.update);
app.delete('/missions/:id', MissionController.delete);

const testData = {
    id: 2,
    exercie_type: 'an',
    reward: 10,
    user_id: 1
};

const updatedData = {
    id: 2,
    exercie_type: 'aegsgesg',
    reward: 50,
    user_id: 1
};

describe('MissionController', () => {
    beforeEach(() => {
        Mission.create.mockClear();
        Mission.findAll.mockClear();
        Mission.findByPk.mockClear();
        Mission.update.mockClear();
        Mission.destroy.mockClear();
    });

    test('create mission', async () => {
        Mission.create.mockResolvedValue(testData);
        const responseCreate = await request(app).post('/missions').send(testData);
        expect(responseCreate.statusCode).toBe(201);
        expect(responseCreate.body).toHaveProperty('id', 2);
    });

    test('get all missions', async () => {
        Mission.findAll.mockResolvedValue([testData]);
        const responseGetAll = await request(app).get('/missions');
        expect(responseGetAll.statusCode).toBe(200);
        expect(responseGetAll.body).toEqual([testData]);
    });

    test('get mission by id', async () => {
        Mission.findByPk.mockResolvedValue(testData);
        const responseGetById = await request(app).get(`/missions/${testData.id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(responseGetById.body).toEqual(testData);
    });

    test('update mission', async () => {
        Mission.update.mockResolvedValue([1]);
        const response = await request(app).put(`/missions/${testData.id}`).send(updatedData);
        expect(response.statusCode).toBe(200);
    });

    test('delete mission', async () => {
        Mission.destroy.mockResolvedValue(testData);
        const response = await request(app).delete(`/missions/${testData.id}`);
        expect(response.statusCode).toBe(200);
    });
});