import { Model, DataTypes } from 'sequelize';

class OrderItem extends Model {
  static init(sequelize) {
    super.init(
      {
        itemId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          field: 'item_id',
        },
        orderId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'order_id',
          references: {
            model: 'Order',
            key: 'orderId',
          },
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'product_id',
          references: {
            model: 'Product',
            key: 'productId',
          },
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        pricePerUnit: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          field: 'price_per_unit',
        },
        subtotal: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          defaultValue: 0.0,
        },
      },
      {
        sequelize,
        modelName: 'OrderItem',
        tableName: 'table_order_items',
        timestamps: false,
        underscored: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'productId' });
    this.belongsTo(models.Order, { foreignKey: 'orderId' });
  }

  toDict() {
    return {
      itemId: this.itemId,
      orderId: this.orderId,
      productId: this.productId,
      quantity: this.quantity,
      pricePerUnit: this.pricePerUnit,
      subtotal: this.subtotal,
    };
  }
}

export default OrderItem;
