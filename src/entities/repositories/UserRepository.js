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
}

export default UserRepository;
