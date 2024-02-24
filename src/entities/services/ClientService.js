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
    const client = await this.clientRepository.findById(clientId);
    if (!client) throw new CustomError('Client not found', 404);

    const { contact } = updatedClient;
    const verifyContact = await this.clientRepository.findByContact(contact);
    if (verifyContact.clientId !== clientId) throw new CustomError('Contact already in use.', 400);

    return this.clientRepository.update(clientId, {
      fullName: updatedClient.fullName,
      contact: updatedClient.contact,
      status: updatedClient.status,
    });
  }

  async deleteClient(clientId) {
    return this.clientRepository.delete(clientId);
  }
}

export default ClientService;
