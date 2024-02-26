class UserRepository {
  constructor(user) {
    this.user = user;
  }

  async findById(id) {
    return this.user.findByPk(id);
  }

  async findByEmail(email) {
    return this.user.findOne({
      where: {
        email,
      },
    });
  }

  async findAll() {
    return this.user.findAll();
  }

  async create(user) {
    return this.user.create(user);
  }

  async update(id, updatedUser) {
    return this.user.update(updatedUser, {
      where: {
        id,
      },
    });
  }

  async updateByEmail(email, updatedUser) {
    return this.user.update(updatedUser, {
      where: {
        email,
      },
    });
  }

  async delete(id) {
    return this.user.destroy({
      where: {
        id,
      },
    });
  }

  async findByFilters(filters) {
    try {
      const users = await this.user.findAll({
        where: filters,
      });
      return users;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default UserRepository;
