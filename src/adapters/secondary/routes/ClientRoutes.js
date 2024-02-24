import express from 'express';
import ClientRepository from '../../../entities/repositories/ClientRepository.js';
import ClientService from '../../../entities/services/ClientService.js';
import ClientController from '../../primary/controllers/ClientController.js';
import Client from '../../../entities/models/Client.js';
import authToken from '../../../utils/middlewareAuth.js';

const clientRouter = express.Router();

const clientRepository = new ClientRepository(Client);
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

clientRouter.get('/', authToken, clientController.getAllClients.bind(clientController));
clientRouter.get('/:clientId', authToken, clientController.getClientById.bind(clientController));
clientRouter.post('/', authToken, clientController.createClient.bind(clientController));
clientRouter.put('/:clientId', authToken, clientController.updateClient.bind(clientController));
clientRouter.delete('/:clientId', authToken, clientController.deleteClient.bind(clientController));

export default clientRouter;
