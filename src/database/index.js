import Sequelize from 'sequelize';
import dbconfig from '../config/database.js';

import User from '../entities/models/User.js';
import Client from '../entities/models/Client.js';
import Order from '../entities/models/Order.js';

const connection = new Sequelize(dbconfig);

async function syncModels() {
  try {
    await User.init(connection);
    console.log(
      `User synchronized with database '${connection.options.database}'.`,
    );
    await Client.init(connection);
    console.log(
      `Client synchronized with database '${connection.options.database}'.`,
    );
    await Order.init(connection);
    console.log(
      `Order synchronized with database '${connection.options.database}'.`,
    );

    User.associate(connection.models);
    Client.associate(connection.models);
    Order.associate(connection.models);
    console.log('All models synchronized and associated successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
    throw error;
  }
}

syncModels();

export default connection;
