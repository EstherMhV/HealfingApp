const UserController = require('../controllers/UsersController');
const User = require('../models/UserModel');
jest.mock('../models/UserModel');

describe('UserController - create', () => {
    it('should create a user successfully', async () => {
        const req = {
            body: {
                username: 'newUser',
                password: 'password123',
                email: 'newuser@example.com',
                gender: 'male',
                birthdate: new Date('1999-01-01')
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };


        User.create.mockResolvedValue(req.body);

        await UserController.create(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith('User created successfully');
    });

    it('should handle errors during user creation', async () => {
        const req = {
            body: {
                username: 'newUser',
                password: 'password123',
                email: 'newuserexample.com'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        User.create.mockRejectedValue(new Error('Creation failed'));

        await UserController.create(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith(expect.any(Error));
    });
});

describe('UserController - login', () => {
    it('should log in a user successfully', async () => {
        const req = {
            body: {
                email: 'esther@gmail.com',
                password: 'Diece4007@'
            }
        };
        const res = {
            send: jest.fn(),
            status: jest.fn(() => res) 
        };
     
        await UserController.login(req, res);

        
        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
            token: expect.any(String)
        }));
    });

    it('should handle errors during user creation', async () => {
        const req = {
            body: {
                password: 'password123',
                email: 'newwfawfar@exeffsfample.com'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        User.create.mockRejectedValue(new Error('Creation failed'));

        await UserController.create(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith(expect.any(Error));
    });
});


describe('UserController - delete', () => {
    it('should delete a user successfully', async () => {

        const req = {
            params: {
                userId: '1'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };


        User.destroy.mockResolvedValue(1);

        await UserController.delete(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith('User deleted successfully');
    });
});