class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getAllUsers(req, res) {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    res.json(user);
  }

  async createUser(req, res) {
    const user = req.body;
    const newUser = await this.userService.createUser(user);
    res.status(201).json(newUser);
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const updatedUser = req.body;
    const result = await this.userService.updateUser(id, updatedUser);

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    const deletedUser = await this.userService.deleteUser(id);

    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}

export default UserController;
