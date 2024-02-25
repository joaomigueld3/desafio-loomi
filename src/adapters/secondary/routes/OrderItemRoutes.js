import express from 'express';
import OrderItemRepository from '../../../entities/repositories/OrderItemRepository.js';
import OrderItemService from '../../../entities/services/OrderItemService.js';
import OrderItemController from '../../primary/controllers/OrderItemController.js';
import OrderItem from '../../../entities/models/OrderItem.js';

const orderItemRouter = express.Router();

const orderItemRepository = new OrderItemRepository(OrderItem);
const orderItemService = new OrderItemService(orderItemRepository);
const orderItemController = new OrderItemController(orderItemService);

orderItemRouter.get('/', orderItemController.getAllOrderItems.bind(orderItemController));
orderItemRouter.get('/:itemId', orderItemController.getOrderItemById.bind(orderItemController));
orderItemRouter.post('/', orderItemController.createOrderItem.bind(orderItemController));
orderItemRouter.put('/:itemId', orderItemController.updateOrderItem.bind(orderItemController));
orderItemRouter.delete('/:itemId', orderItemController.deleteOrderItem.bind(orderItemController));

export default orderItemRouter;
