import { Op } from 'sequelize';
import { errorHandlerCustom, errorHandler } from '../../../utils/errorHandler.js';

class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getAllProducts(req, res) {
    try {
      const products = await this.productService.getAllProducts();
      return res.status(200).json(products);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getProductById(req, res) {
    try {
      const { productId } = req.params;
      const product = await this.productService.getProductById(productId);
      if (!product) return errorHandlerCustom(res, 'Product not found', 404);
      return res.status(200).json(product);
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async createProduct(req, res) {
    try {
      const productData = req.body;
      const product = await this.productService.createProduct(productData);
      return res.status(201).json({ message: 'Product created', product });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async updateProduct(req, res) {
    try {
      const { productId } = req.params;
      const productData = req.body;
      const product = await this.productService.getProductById(productId);
      if (!product) return errorHandlerCustom(res, 'Product not found', 404);

      const updatedProduct = await this.productService.updateProduct(productId, productData);
      return res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async deleteProduct(req, res) {
    try {
      const { productId } = req.params;
      const product = await this.productService.getProductById(productId);
      if (!product) return errorHandlerCustom(res, 'Product not found', 404);

      const deletedProduct = product;
      await this.productService.deleteProduct(productId);
      return res.status(200).json({ message: 'Product deleted successfully.', deletedProduct });
    } catch (e) {
      return errorHandler(e, res);
    }
  }

  async getProductsByFilters(req, res) {
    try {
      const filters = req.body;

      const filterOptions = {};
      if (filters.productName) {
        filterOptions.productName = { [Op.iLike]: `%${filters.productName}%` };
      }
      if (filters.description) {
        filterOptions.description = { [Op.iLike]: `%${filters.description}%` };
      }
      if (filters.minPrice) {
        filterOptions.price = { [Op.gte]: parseFloat(filters.minPrice) };
      }
      if (filters.maxPrice) {
        filterOptions.price = { ...filterOptions.price, [Op.lte]: parseFloat(filters.maxPrice) };
      }
      if (filters.quantityInStock) {
        filterOptions.quantityInStock = parseInt(filters.quantityInStock, 10);
      }

      const filteredProducts = await this.productService.getProductsByFilters(filterOptions);
      if (filteredProducts.length < 1) return errorHandlerCustom(res, 'Products not found', 404);

      return res.status(200).json(filteredProducts);
    } catch (e) {
      return errorHandler(e, res);
    }
  }
}

export default ProductController;
