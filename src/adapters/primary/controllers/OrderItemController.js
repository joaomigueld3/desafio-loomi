import { errorHandler, errorHandlerCustom } from '../../../utils/errorHandler.js';

// order-item.controller.js
class OrderItemController {
  constructor(orderItemService) {
    this.orderItemService = orderItemService;
  }

  async getAllOrderItems(req, res) {
    try {
      const orderItems = await this.orderItemService.getAllOrderItems();
      return res.status(200).json(orderItems);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getOrderItemById(req, res) {
    try {
      const { itemId } = req.params;
      const orderItem = await this.orderItemService.getOrderItemById(itemId);
      if (!orderItem) return errorHandlerCustom(res, 'OrderItem not found', 404);
      return res.status(200).json(orderItem);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async createOrderItem(req, res) {
    try {
      const orderItemData = req.body;
      const orderItem = await this.orderItemService.createOrderItem(orderItemData);
      return res.status(201).json({ message: 'OrderItem created', orderItem });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async updateOrderItem(req, res) {
    try {
      const { itemId } = req.params;
      const orderItemData = req.body;
      const orderItem = await this.orderItemService.getOrderItemById(itemId);
      if (!orderItem) return errorHandlerCustom(res, 'OrderItem not found', 404);

      const updatedOrderItem = await this.orderItemService.updateOrderItem(itemId, orderItemData);
      return res.status(200).json({ message: 'OrderItem updated successfully', updatedOrderItem });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async deleteOrderItem(req, res) {
    try {
      const { itemId } = req.params;
      const orderItem = await this.orderItemService.getOrderItemById(itemId);
      if (!orderItem) return errorHandlerCustom(res, 'OrderItem not found', 404);

      const deletedOrderItem = orderItem;
      this.orderItemService.deleteOrderItem(itemId);
      return res.status(200).json({ message: 'OrderItem deleted successfully', deletedOrderItem });
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export default OrderItemController;
