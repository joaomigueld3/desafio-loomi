// routes/orderRoutes.js
import express from 'express';
import Order from '../../../entities/models/Order.js';
import OrderController from '../../primary/controllers/OrderController.js';
import OrderService from '../../../entities/services/OrderService.js';
import OrderRepository from '../../../entities/repositories/OrderRepository.js';

const orderRouter = express.Router();

const orderRepository = new OrderRepository(Order);
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

orderRouter.post('/', orderController.createOrder.bind(orderController));
orderRouter.get('/', orderController.getAllOrders.bind(orderController));
orderRouter.get('/:orderId', orderController.getOrderById.bind(orderController));
orderRouter.put('/:orderId', orderController.updateOrder.bind(orderController));
orderRouter.delete('/:orderId', orderController.deleteOrder.bind(orderController));

export default orderRouter;
