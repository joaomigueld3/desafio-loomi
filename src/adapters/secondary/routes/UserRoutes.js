import express from 'express';
import UserController from '../../primary/controllers/UserController.js';
import UserService from '../../../entities/services/UserService.js';
import UserRepository from '../../../entities/repositories/UserRepository.js';

const userRouter = express.Router();

// Injeção de dependências
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Rotas
userRouter.get('/', userController.getAllUsers.bind(userController));
userRouter.get('/:id', userController.getUserById.bind(userController));
userRouter.post('/', userController.createUser.bind(userController));
userRouter.put('/:id', userController.updateUser.bind(userController));
userRouter.delete('/:id', userController.deleteUser.bind(userController));

export default userRouter;
