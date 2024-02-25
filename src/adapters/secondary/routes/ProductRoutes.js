import express from 'express';
import ProductRepository from '../../../entities/repositories/ProductRepository.js';
import ProductService from '../../../entities/services/ProductService.js';
import ProductController from '../../primary/controllers/ProductController.js';
import Product from '../../../entities/models/Product.js';

const productRouter = express.Router();

const productRepository = new ProductRepository(Product);
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

productRouter.get('/', productController.getAllProducts.bind(productController));
productRouter.get('/:productId', productController.getProductById.bind(productController));
productRouter.post('/', productController.createProduct.bind(productController));
productRouter.put('/:productId', productController.updateProduct.bind(productController));
productRouter.delete('/:productId', productController.deleteProduct.bind(productController));

export default productRouter;
