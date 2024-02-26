import { Op } from 'sequelize';

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
    return this.client.update(updatedClient, {
      where: {
        clientId,
      },
    });
  }

  async delete(clientId) {
    return this.client.destroy({
      where: {
        clientId,
      },
    });
  }

  async findByName(name) {
    try {
      const clients = await this.client.findAll({
        where: {
          fullName: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      return clients;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findByFilters(filters) {
    try {
      const clients = await this.client.findAll({
        where: filters,
      });
      return clients;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ClientRepository;
