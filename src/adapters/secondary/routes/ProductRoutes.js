import express from 'express';
import ProductRepository from '../../../entities/repositories/ProductRepository.js';
import ProductService from '../../../entities/services/ProductService.js';
import ProductController from '../../primary/controllers/ProductController.js';
import Product from '../../../entities/models/Product.js';
import ProductValidation from '../../../validation/ProductValidation.js';

const productRouter = express.Router();

const productRepository = new ProductRepository(Product);
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

productRouter.get('/', productController.getAllProducts.bind(productController));
productRouter.get('/:productId', ProductValidation.getProductByIdSchema, productController.getProductById.bind(productController));
productRouter.post('/', ProductValidation.createProductSchema, productController.createProduct.bind(productController));
productRouter.put('/:productId', ProductValidation.updateProductSchema, productController.updateProduct.bind(productController));
productRouter.delete('/:productId', ProductValidation.deleteProductSchema, productController.deleteProduct.bind(productController));
productRouter.post('/filters', ProductValidation.getProductsByFiltersSchema, productController.getProductsByFilters.bind(productController));

export default productRouter;
