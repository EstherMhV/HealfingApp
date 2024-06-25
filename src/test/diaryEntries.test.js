const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const DiaryEntriesController = require('../controllers/DiaryEntriesController');
const DiaryEntries = require('../models/DiaryEntriesModel');

jest.mock('../models/DiaryEntriesModel');

const app = express();
app.use(bodyParser.json());
app.post('/diaryEntries', DiaryEntriesController.create);
app.get('/diaryEntries', DiaryEntriesController.getAll);
app.get('/diaryEntries/:id', DiaryEntriesController.get);
app.put('/diaryEntries/:id', DiaryEntriesController.update);
app.delete('/diaryEntries/:id', DiaryEntriesController.delete);

const testData = {
    id: 2,
    user_id: 1,
    date: '2020-01-01',
    title: 'Test',
    description: ' test description',
    mood: 'test',

};

const updatedData = {
    id: 2,
    user_id: 1,
    date: '2020-01-01',
    title: 'Test',
    description: ' test description update',
    mood: 'test',

};

describe('DiaryEntriesController', () => {
    beforeEach(() => {
        DiaryEntries.create.mockClear();
        DiaryEntries.findAll.mockClear();
        DiaryEntries.findByPk.mockClear();
        DiaryEntries.update.mockClear();
        DiaryEntries.destroy.mockClear();
    });

    test('create DiaryEntries', async () => {
        DiaryEntries.create.mockResolvedValue(testData);
        const responseCreate = await request(app).post('/diaryEntries').send(testData);
        expect(responseCreate.statusCode).toBe(201);
        expect(responseCreate.body).toHaveProperty('id', 2);
    });

    test('get all DiaryEntries', async () => {
        DiaryEntries.findAll.mockResolvedValue([testData]);
        const responseGetAll = await request(app).get('/diaryEntries');
        expect(responseGetAll.statusCode).toBe(200);
        expect(responseGetAll.body).toEqual([testData]);
    });

    test('get DiaryEntries by id', async () => {
        DiaryEntries.findByPk.mockResolvedValue(testData);
        const responseGetById = await request(app).get(`/diaryEntries/${testData.id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(responseGetById.body).toEqual(testData);
    });

    test('update DiaryEntries', async () => {
        DiaryEntries.update.mockResolvedValue([1]);
        const response = await request(app).put(`/diaryEntries/${testData.id}`).send(updatedData);
        expect(response.statusCode).toBe(200);
    });

    test('delete DiaryEntries', async () => {
        DiaryEntries.destroy.mockResolvedValue(testData);
        const response = await request(app).delete(`/diaryEntries/${testData.id}`);
        expect(response.statusCode).toBe(200);
    });
});