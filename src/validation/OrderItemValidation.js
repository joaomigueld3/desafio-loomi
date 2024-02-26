import Joi from 'joi';
import validateSchema from '../utils/validationUtils.js';

class OrderItemValidation {
  static createOrderItemValidation(req, res, next) {
    const schema = Joi.object().keys({
      orderId: Joi.number().integer().required(),
      productId: Joi.number().integer().required(),
      quantity: Joi.number().integer().required(),
      pricePerUnit: Joi.number().precision(2).required(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static getOrderItemByIdSchema(req, res, next) {
    const schema = Joi.object({
      itemId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }

  static updateOrderItemSchema(req, res, next) {
    const schema = Joi.object().keys({
      orderId: Joi.number().integer(),
      productId: Joi.number().integer(),
      quantity: Joi.number().integer(),
      pricePerUnit: Joi.number().precision(2),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static deleteOrderItemSchema(req, res, next) {
    const schema = Joi.object({
      itemId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }
}

export default OrderItemValidation;
