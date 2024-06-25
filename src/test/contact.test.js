const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const ContactController = require('../controllers/ContactsController');
const Contact = require('../models/ContactModel');

jest.mock('../models/ContactModel');

const app = express();
app.use(bodyParser.json());
app.post('/contacts', ContactController.createContact);
app.get('/contacts', ContactController.getAllContacts);
app.get('/contacts/:id', ContactController.getContact);
app.put('/contacts/:id', ContactController.updateContact);
app.delete('/contacts/:id', ContactController.deleteContact);

const testData = {
    id: 2,
    company: 'aaeaseges',
    content: 'Je drhdarhrh',
    phone_number: 232232222,
    link_website: 'http://www.google.com',
    url_insta: 'http://www.google.com'

};

const updatedData = {
    id: 2,
    company: 'aaeaseges',
    content: 'Je ',
    phone_number: 232232222,
    link_website: 'http://www.google.com',
    url_insta: 'http://www.google.com'

};

describe('ContactController', () => {
    beforeEach(() => {
        Contact.create.mockClear();
        Contact.findAll.mockClear();
        Contact.findByPk.mockClear();
        Contact.update.mockClear();
        Contact.destroy.mockClear();
    });

    test('create Contact', async () => {
        Contact.create.mockResolvedValue(testData);
        const responseCreate = await request(app).post('/contacts').send(testData);
        expect(responseCreate.statusCode).toBe(201);
        expect(responseCreate.body).toHaveProperty('id', 2);
    });

    test('get all Contact', async () => {
        Contact.findAll.mockResolvedValue([testData]);
        const responseGetAll = await request(app).get('/contacts');
        expect(responseGetAll.statusCode).toBe(200);
        expect(responseGetAll.body).toEqual([testData]);
    });

    test('get Contact by id', async () => {
        Contact.findByPk.mockResolvedValue(testData);
        const responseGetById = await request(app).get(`/contacts/${testData.id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(responseGetById.body).toEqual(testData);
    });

    test('update Contact', async () => {
        Contact.update.mockResolvedValue([1]);
        const response = await request(app).put(`/contacts/${testData.id}`).send(updatedData);
        expect(response.statusCode).toBe(200);
    });

    test('delete Contact', async () => {
        Contact.destroy.mockResolvedValue(testData);
        const response = await request(app).delete(`/contacts/${testData.id}`);
        expect(response.statusCode).toBe(200);
    });
    
});