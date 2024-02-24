module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table_orders', {
      order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'table_clients',
          key: 'client_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: Sequelize.ENUM('Received', 'In Preparation', 'Dispatched', 'Delivered'),
        allowNull: false,
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },      
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('table_orders');
  },
};
