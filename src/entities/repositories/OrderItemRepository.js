class OrderItemRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    return this.model.findAll();
  }

  async findById(itemId) {
    return this.model.findByPk(itemId);
  }

  async create(orderItemData) {
    const orderItemWithSubtotal = {
      ...orderItemData,
      subtotal: orderItemData.quantity * orderItemData.pricePerUnit,
    };
    return this.model.create(orderItemWithSubtotal);
  }

  async update(itemId, orderItemData) {
    const orderItem = await this.findById(itemId);
    if (orderItem) {
      const updatedOrderItemData = {
        ...orderItemData,
        subtotal: orderItemData.quantity * orderItemData.pricePerUnit,
      };
      return orderItem.update(updatedOrderItemData);
    }
    return null;
  }

  async delete(itemId) {
    const orderItem = await this.findById(itemId);
    if (orderItem) {
      await orderItem.destroy();
    }
  }

  async findByFilters(filters) {
    try {
      const orders = await this.model.findAll({
        where: filters,
      });
      return orders;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default OrderItemRepository;
