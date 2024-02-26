import express from 'express';
import authToken from '../../../utils/middlewareAuth.js';
import User from '../../../entities/models/User.js';
import UserController from '../../primary/controllers/UserController.js';
import UserService from '../../../entities/services/UserService.js';
import UserRepository from '../../../entities/repositories/UserRepository.js';
import UserValidation from '../../../validation/UserValidation.js';

const userRouter = express.Router();

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get('/refresh-token', userController.refreshToken.bind(userController));
userRouter.get('/users', authToken, userController.getAllUsers.bind(userController));

userRouter.post('/login', UserValidation.loginOrchangePassSchema, userController.login.bind(userController));
userRouter.post('/signin', UserValidation.createUserValidation, userController.createUser.bind(userController));
userRouter.put('/change-password', authToken, UserValidation.loginOrchangePassSchema, userController.changePassword.bind(userController));
userRouter.get('/users/:id', authToken, UserValidation.getUserByIdSchema, userController.getUserById.bind(userController));
userRouter.put('/users/:id', authToken, UserValidation.updateUserByIdSchema, userController.updateUser.bind(userController));
userRouter.delete('/users/:id', authToken, UserValidation.deleteUserByIdSchema, userController.deleteUser.bind(userController));
userRouter.post('/users/filters', authToken, UserValidation.getUsersByFiltersSchema, userController.getUsersByFilters.bind(userController));
userRouter.get('/confirmation/:token', userController.emailConfirmation.bind(userController));

export default userRouter;
