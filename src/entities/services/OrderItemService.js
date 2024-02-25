class OrderItemService {
  constructor(orderItemRepository, productService) {
    this.orderItemRepository = orderItemRepository;
    this.productService = productService;
  }

  async getAllOrderItems() {
    return this.orderItemRepository.findAll();
  }

  async getOrderItemById(itemId) {
    return this.orderItemRepository.findById(itemId);
  }

  async createOrderItemAux(orderItemData) {
    return this.orderItemRepository.create(orderItemData);
  }

  async updateOrderItem(itemId, orderItemData) {
    return this.orderItemRepository.update(itemId, orderItemData);
  }

  async deleteOrderItem(itemId) {
    return this.orderItemRepository.delete(itemId);
  }

  async createOrderItem(orderId, productId, quantity, pricePerUnit) {
    const product = await this.productService.getProductById(productId);
    if (!product || product.quantityInStock < quantity) {
      throw new Error('Product not found or Insufficient quantity in stock.');
    }

    const orderItem = await this.orderItemRepository.create({
      orderId,
      productId,
      quantity,
      pricePerUnit,
    });

    await this.productService.updateProductQuantity(productId, -quantity);

    return orderItem;
  }
}

export default OrderItemService;
