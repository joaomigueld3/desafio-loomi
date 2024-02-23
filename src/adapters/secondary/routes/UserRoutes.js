import express from 'express';
import User from '../../../entities/models/User.js';
import UserController from '../../primary/controllers/UserController.js';
import UserService from '../../../entities/services/UserService.js';
import UserRepository from '../../../entities/repositories/UserRepository.js';
import authenticateToken from '../../../utils/middlewareAuth.js';

const userRouter = express.Router();

// Injeção de dependências
const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.post('/login', userController.login.bind(userController));
userRouter.post('/signin', userController.createUser.bind(userController));
userRouter.put('/change-password', authenticateToken, userController.changePassword.bind(userController));
userRouter.get('/refresh-token', userController.refreshToken.bind(userController));
userRouter.get('/users', userController.getAllUsers.bind(userController));
userRouter.get('/users/:id', authenticateToken, userController.getUserById.bind(userController));
userRouter.put('/users/:id', authenticateToken, userController.updateUser.bind(userController));
userRouter.delete('/users/:id', authenticateToken, userController.deleteUser.bind(userController));

export default userRouter;
