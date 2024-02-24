class ClientRepository {
  constructor(client) {
    this.client = client;
  }

  async findById(clientId) {
    return this.client.findByPk(clientId);
  }

  async findByContact(contact) {
    return this.client.findOne({
      where: {
        contact,
      },
    });
  }

  async findAll() {
    return this.client.findAll();
  }

  async create(client) {
    return this.client.create(client);
  }

  async update(clientId, updatedClient) {
    await this.client.update(updatedClient, {
      where: {
        clientId,
      },
    });
    return this.findById(clientId);
  }

  async delete(clientId) {
    return this.client.destroy({
      where: {
        clientId,
      },
    });
  }
}

export default ClientRepository;
