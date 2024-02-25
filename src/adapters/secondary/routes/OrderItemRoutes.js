import express from 'express';
import OrderItemRepository from '../../../entities/repositories/OrderItemRepository.js';
import OrderItemService from '../../../entities/services/OrderItemService.js';
import OrderItemController from '../../primary/controllers/OrderItemController.js';
import OrderItem from '../../../entities/models/OrderItem.js';
import Product from '../../../entities/models/Product.js';
import ProductService from '../../../entities/services/ProductService.js';
import ProductRepository from '../../../entities/repositories/ProductRepository.js';

const orderItemRouter = express.Router();

const productRepository = new ProductRepository(Product);
const productService = new ProductService(productRepository);

const orderItemRepository = new OrderItemRepository(OrderItem);
const orderItemService = new OrderItemService(orderItemRepository, productService);
const orderItemController = new OrderItemController(orderItemService);

orderItemRouter.get('/', orderItemController.getAllOrderItems.bind(orderItemController));
orderItemRouter.get('/:itemId', orderItemController.getOrderItemById.bind(orderItemController));
orderItemRouter.post('/', orderItemController.createOrderItem.bind(orderItemController));
orderItemRouter.put('/:itemId', orderItemController.updateOrderItem.bind(orderItemController));
orderItemRouter.delete('/:itemId', orderItemController.deleteOrderItem.bind(orderItemController));

export default orderItemRouter;
