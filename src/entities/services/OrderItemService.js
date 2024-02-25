class OrderItemService {
  constructor(orderItemRepository) {
    this.orderItemRepository = orderItemRepository;
  }

  async getAllOrderItems() {
    return this.orderItemRepository.findAll();
  }

  async getOrderItemById(itemId) {
    return this.orderItemRepository.findById(itemId);
  }

  async createOrderItem(orderItemData) {
    return this.orderItemRepository.create(orderItemData);
  }

  async updateOrderItem(itemId, orderItemData) {
    return this.orderItemRepository.update(itemId, orderItemData);
  }

  async deleteOrderItem(itemId) {
    return this.orderItemRepository.delete(itemId);
  }
}

export default OrderItemService;
