import { Op } from 'sequelize';
import { errorHandlerCustom, errorHandler } from '../../../utils/errorHandler.js';

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
      if (!client) return errorHandlerCustom(res, 'Client not found.', 404);

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
      const client = await this.clientService.getClientById(clientId);
      if (!client) return errorHandlerCustom(res, 'Client not found.', 404);

      const { contact } = updatedClient;
      const verifyContact = await this.clientService.getClientByContact(contact);
      if (verifyContact && verifyContact.clientId !== clientId) return errorHandlerCustom(res, 'Contact already in use.', 400);

      await this.clientService.updateClient(clientId, updatedClient);
      return res.status(200).json({ message: 'Client updated successfully.', updatedClient });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async deleteClient(req, res) {
    try {
      const { clientId } = req.params;
      const client = await this.clientService.getClientById(clientId);
      if (!client) return errorHandlerCustom(res, 'Client not found.', 404);

      const deletedClient = client;
      await this.clientService.deleteClient(clientId);
      return res.status(200).json({ message: 'Client deleted successfully.', deletedClient });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getClientByName(req, res) {
    try {
      const { fullName } = req.body;
      const client = await this.clientService.getClientByName(fullName);
      if (!client) return errorHandlerCustom(res, 'Client not found.', 404);

      return res.status(200).json(client);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getClientsByFilters(req, res) {
    try {
      const filters = req.body;

      const filterOptions = {};
      if (filters.fullName) {
        filterOptions.fullName = { [Op.iLike]: `%${filters.fullName}%` };
      }
      if (filters.contact) {
        filterOptions.contact = { [Op.iLike]: `%${filters.contact}%` };
      }
      if (filters.address) {
        filterOptions.address = { [Op.iLike]: `%${filters.address}%` };
      }
      if (filters.status !== undefined) {
        filterOptions.status = filters.status;
      }

      const filteredClients = await this.clientService.getClientsByFilters(filterOptions);
      if (filteredClients.length < 1) {
        return res.status(404).json({ error: 'Clients not found' });
      }

      return res.status(200).json(filteredClients);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export default ClientController;
