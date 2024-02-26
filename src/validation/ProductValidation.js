import Joi from 'joi';
import validateSchema from '../utils/validationUtils.js';

class ProductValidation {
  static createProductSchema(req, res, next) {
    const schema = Joi.object().keys({
      productName: Joi.string().required(),
      description: Joi.string(),
      price: Joi.number().positive().required(),
      quantityInStock: Joi.number().integer().positive().required(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static updateProductSchema(req, res, next) {
    const schema = Joi.object().keys({
      productName: Joi.string(),
      description: Joi.string(),
      price: Joi.number().positive(),
      quantityInStock: Joi.number().integer().positive(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static getProductByIdSchema(req, res, next) {
    const schema = Joi.object({
      productId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }

  static deleteProductSchema(req, res, next) {
    const schema = Joi.object({
      productId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }

  static getProductsByFiltersSchema(req, res, next) {
    const schema = Joi.object({
      productName: Joi.string().allow(''),
      description: Joi.string().allow(''),
      minPrice: Joi.number().positive(),
      maxPrice: Joi.number().positive(),
      quantityInStock: Joi.number().integer().positive(),
    });
    validateSchema('body', schema)(req, res, next);
  }
}

export default ProductValidation;
