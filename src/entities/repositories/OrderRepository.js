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

  async update(orderId, updatedOrder) {
    return this.orderModel.update(updatedOrder, {
      where: {
        orderId,
      },
    });
  }

  async delete(orderId) {
    return this.orderModel.destroy({
      where: {
        orderId,
      },
    });
  }
}

export default OrderRepository;
