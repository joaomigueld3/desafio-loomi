class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async createOrder(orderData) {
    return this.orderRepository.create(orderData);
  }

  async getAllOrders() {
    return this.orderRepository.findAll();
  }

  async getOrderById(orderId) {
    return this.orderRepository.findById(orderId);
  }

  async updateOrder(orderId, updatedData) {
    return this.orderRepository.update(orderId, updatedData);
  }

  async deleteOrder(orderId) {
    return this.orderRepository.delete(orderId);
  }
}

export default OrderService;
