import { errorHandlerCustom, errorHandler } from '../../../utils/errorHandler.js';

class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  async createOrder(req, res) {
    try {
      const orderData = req.body;
      const createdOrder = await this.orderService.createOrder(orderData);
      return res.status(201).json({ message: 'Order Created', createdOrder });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getAllOrders(req, res) {
    try {
      const orders = await this.orderService.getAllOrders();
      return res.status(200).json({ allOrders: orders });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getOrderById(req, res) {
    try {
      const orderId = req.params.id;
      const order = await this.orderService.getOrderById(orderId);
      if (!order) return errorHandlerCustom(res, 'Order not found.', 404);
      return res.status(200).json(order);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async updateOrder(req, res) {
    try {
      const orderId = req.params.id;
      const updatedOrder = req.body;
      const order = await this.orderService.getOrderById(orderId);
      if (!order) return errorHandlerCustom(res, 'Order not found.', 404);

      await this.orderService.updateOrder(orderId, updatedOrder);

      return res.status(200).json({ message: 'Order updated successfully.', updatedOrder });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async deleteOrder(req, res) {
    try {
      const orderId = req.params.id;
      const order = await this.orderService.getOrderById(orderId);
      if (!order) return errorHandlerCustom(res, 'Order not found', 404);

      const deletedOrder = order;

      await this.orderService.deleteOrder(orderId);
      return res.status(200).json({ message: 'Order deleted successfully', deletedOrder });
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export default OrderController;
