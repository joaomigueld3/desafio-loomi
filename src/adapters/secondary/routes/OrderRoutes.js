// routes/orderRoutes.js
import express from 'express';
import Order from '../../../entities/models/Order.js';
import OrderController from '../../primary/controllers/OrderController.js';
import OrderService from '../../../entities/services/OrderService.js';
import OrderRepository from '../../../entities/repositories/OrderRepository.js';
import OrderValidation from '../../../validation/OrderValidation.js';

const orderRouter = express.Router();

const orderRepository = new OrderRepository(Order);
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

orderRouter.post('/', OrderValidation.createOrderValidation, orderController.createOrder.bind(orderController));
orderRouter.get('/', orderController.getAllOrders.bind(orderController));
orderRouter.get('/:orderId', OrderValidation.getOrderByIdSchema, orderController.getOrderById.bind(orderController));
orderRouter.put('/:orderId', OrderValidation.updateOrderSchema, orderController.updateOrder.bind(orderController));
orderRouter.put('/update-status/:orderId', OrderValidation.updateOrderStatusSchema, orderController.updateOrder.bind(orderController));
orderRouter.delete('/:orderId', OrderValidation.deleteOrderSchema, orderController.deleteOrder.bind(orderController));
orderRouter.post('/filters', OrderValidation.getOrdersByFiltersSchema, orderController.getOrdersByFilters.bind(orderController));

export default orderRouter;
