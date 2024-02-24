import { CustomError } from '../../utils/errorHandler.js';

class ClientService {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async getClientById(clientId) {
    return this.clientRepository.findById(clientId);
  }

  async getClientByContact(contact) {
    return this.clientRepository.findByContact(contact);
  }

  async getAllClients() {
    return this.clientRepository.findAll();
  }

  async createClient(client) {
    const { contact } = client;
    const verifyContact = await this.clientRepository.findByContact(contact);
    if (verifyContact) throw new CustomError('Contact already in use.', 400);

    return this.clientRepository.create(client);
  }

  async updateClient(clientId, updatedClient) {
    return this.clientRepository.update(clientId, updatedClient);
  }

  async deleteClient(clientId) {
    return this.clientRepository.delete(clientId);
  }
}

export default ClientService;
