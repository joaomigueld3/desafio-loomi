class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(id) {
    return this.userRepository.findById(id);
  }

  async getUserByEmail(email) {
    return this.userRepository.findByEmail(email);
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async createUser(user) {
    return this.userRepository.create(user);
  }

  async updateUser(id, updatedUser) {
    return this.userRepository.update(id, updatedUser);
  }

  async deleteUser(id) {
    return this.userRepository.delete(id);
  }
}

export default UserService;
