import { errorHandler, CustomError } from '../../../utils/errorHandler.js';

class ClientController {
  constructor(clientService) {
    this.clientService = clientService;
  }

  async getAllClients(req, res) {
    try {
      const clients = await this.clientService.getAllClients();
      return res.status(200).json({ allClients: clients });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getClientById(req, res) {
    try {
      const { clientId } = req.params;
      const client = await this.clientService.getClientById(clientId);
      if (!client) throw new CustomError('Client not found.', 404);

      return res.status(200).json(client);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async createClient(req, res) {
    try {
      const client = req.body;
      const newClient = await this.clientService.createClient(client);
      return res.status(201).json(newClient);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async updateClient(req, res) {
    try {
      const { clientId } = req.params;
      const updatedClient = req.body;
      const result = await this.clientService.updateClient(clientId, updatedClient);
      if (!result) throw new CustomError('Client not found.', 404);

      return res.status(200).json({ message: 'Client updated successfully.', updatedClient });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async deleteClient(req, res) {
    const { clientId } = req.params;
    const deletedClient = await this.clientService.deleteClient(clientId);
    if (!deletedClient) throw new CustomError('Client not found.', 404);

    return res.status(200).json({ message: 'Client deleted successfully.' });
  }
}

export default ClientController;
