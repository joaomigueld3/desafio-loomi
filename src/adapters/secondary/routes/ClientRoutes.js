import express from 'express';
import ClientRepository from '../../../entities/repositories/ClientRepository.js';
import ClientService from '../../../entities/services/ClientService.js';
import ClientController from '../../primary/controllers/ClientController.js';
import Client from '../../../entities/models/Client.js';

const clientRouter = express.Router();

const clientRepository = new ClientRepository(Client);
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

clientRouter.get('/', clientController.getAllClients.bind(clientController));
clientRouter.get('/:clientId', clientController.getClientById.bind(clientController));
clientRouter.post('/', clientController.createClient.bind(clientController));
clientRouter.put('/:clientId', clientController.updateClient.bind(clientController));
clientRouter.delete('/:clientId', clientController.deleteClient.bind(clientController));

export default clientRouter;
