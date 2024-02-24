'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table_clients', {
      client_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'table_users',
          key: 'id',
        },
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      full_name: {
        type: Sequelize.STRING(80),
        allowNull: false,
        set(value) {
          this.setDataValue('full_name', value.toUpperCase());
        },
      },
      contact: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.addConstraint('table_clients', {
      type: 'foreign key',
      fields: ['user_id'],
      name: 'fk_user_id',
      references: {
        table: 'table_users',
        field: 'id',
      },
      onDelete: 'SET NULL', // ou 'CASCADE' dependendo dos requisitos de negócios
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('table_clients', 'fk_user_id');
    await queryInterface.dropTable('table_clients');
  },
};
