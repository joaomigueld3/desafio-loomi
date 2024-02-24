import Sequelize from 'sequelize';
import dbconfig from '../config/database.js';

import User from '../entities/models/User.js';
import Client from '../entities/models/Client.js';

const connection = new Sequelize(dbconfig);

async function syncModels() {
  try {
    await User.init(connection);
    console.log(
      `User synchronized with database '${connection.options.database}'.`,
    );
    await Client.init(connection);
    console.log(
      `User synchronized with database '${connection.options.database}'.`,
    );

    User.associate(connection.models);
    Client.associate(connection.models);
    console.log('All models synchronized and associated successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
    throw error;
  }
}

syncModels();

export default connection;
