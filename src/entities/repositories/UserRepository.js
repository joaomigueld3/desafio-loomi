import User from '../models/User.js';

class UserRepository {
  static async findById(id) {
    return User.findByPk(id);
  }

  static async findByEmail(email) {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  static async findAll() {
    return User.findAll();
  }

  static async create(user) {
    return User.create(user);
  }

  static async update(id, updatedUser) {
    return User.update(updatedUser, {
      where: {
        id,
      },
    });
  }

  static async delete(id) {
    return User.destroy({
      where: {
        id,
      },
    });
  }
}

export default UserRepository;
