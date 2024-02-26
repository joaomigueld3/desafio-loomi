class OrderRepository {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  async findById(orderId) {
    return this.orderModel.findByPk(orderId);
  }

  async findAll() {
    return this.orderModel.findAll();
  }

  async create(orderData) {
    return this.orderModel.create(orderData);
  }

  async update(orderId, updateOrderData) {
    const order = await this.findById(orderId);
    if (order) {
      return order.update(updateOrderData);
    }
    return null;
  }

  async delete(orderId) {
    return this.orderModel.destroy({
      where: {
        orderId,
      },
    });
  }

  async findByFilters(filters) {
    try {
      const orders = await this.orderModel.findAll({
        where: filters,
      });
      return orders;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default OrderRepository;
