import express from 'express';
import OrderItemRepository from '../../../entities/repositories/OrderItemRepository.js';
import OrderItemService from '../../../entities/services/OrderItemService.js';
import OrderItemController from '../../primary/controllers/OrderItemController.js';
import OrderItem from '../../../entities/models/OrderItem.js';
import Product from '../../../entities/models/Product.js';
import ProductService from '../../../entities/services/ProductService.js';
import ProductRepository from '../../../entities/repositories/ProductRepository.js';
import OrderItemValidation from '../../../validation/OrderItemValidation.js';

const orderItemRouter = express.Router();

const productRepository = new ProductRepository(Product);
const productService = new ProductService(productRepository);

const orderItemRepository = new OrderItemRepository(OrderItem);
const orderItemService = new OrderItemService(orderItemRepository, productService);
const orderItemController = new OrderItemController(orderItemService);

orderItemRouter.get('/', orderItemController.getAllOrderItems.bind(orderItemController));
orderItemRouter.get('/:itemId', OrderItemValidation.getOrderItemByIdSchema, orderItemController.getOrderItemById.bind(orderItemController));
orderItemRouter.post('/', OrderItemValidation.createOrderItemValidation, orderItemController.createOrderItem.bind(orderItemController));
orderItemRouter.put('/:itemId', OrderItemValidation.updateOrderItemSchema, orderItemController.updateOrderItem.bind(orderItemController));
orderItemRouter.delete('/:itemId', OrderItemValidation.deleteOrderItemSchema, orderItemController.deleteOrderItem.bind(orderItemController));
orderItemRouter.post('/filters', OrderItemValidation.getOrderItemsByFiltersSchema, orderItemController.getOrderItemsByFilters.bind(orderItemController));

export default orderItemRouter;
