import express from 'express';
import authToken from '../../../utils/middlewareAuth.js';
import User from '../../../entities/models/User.js';
import UserController from '../../primary/controllers/UserController.js';
import UserService from '../../../entities/services/UserService.js';
import UserRepository from '../../../entities/repositories/UserRepository.js';

const userRouter = express.Router();

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.post('/login', userController.login.bind(userController));
userRouter.post('/signin', userController.createUser.bind(userController));
userRouter.put('/change-password', authToken, userController.changePassword.bind(userController));
userRouter.get('/refresh-token', userController.refreshToken.bind(userController));
userRouter.get('/users', authToken, userController.getAllUsers.bind(userController));
userRouter.get('/users/:id', authToken, userController.getUserById.bind(userController));
userRouter.put('/users/:id', authToken, userController.updateUser.bind(userController));
userRouter.delete('/users/:id', authToken, userController.deleteUser.bind(userController));

export default userRouter;
