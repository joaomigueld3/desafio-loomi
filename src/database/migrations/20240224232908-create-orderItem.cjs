'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table_order_items', {
      item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'table_orders',
          key: 'order_id',
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'table_products',
          key: 'product_id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_per_unit: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      subtotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
    });

    await queryInterface.addConstraint('table_order_items', {
      fields: ['order_id'],
      type: 'foreign key',
      references: {
        table: 'table_orders',
        field: 'order_id',
      },
      onDelete: 'cascade', // ou 'set null' ou 'restrict'
      onUpdate: 'cascade',
      name: 'fk_orderitem_order',
    });

    await queryInterface.addConstraint('table_order_items', {
      fields: ['product_id'],
      type: 'foreign key',
      references: {
        table: 'table_products',
        field: 'product_id',
      },
      onDelete: 'cascade', // ou 'set null' ou 'restrict'
      onUpdate: 'cascade',
      name: 'fk_orderitem_product',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('table_order_items');
  }
};
