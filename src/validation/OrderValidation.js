import Joi from 'joi';
import validateSchema from '../utils/validationUtils.js';

class OrderValidation {
  static createOrderValidation(req, res, next) {
    const schema = Joi.object().keys({
      clientId: Joi.number().integer().required(),
      status: Joi.string().valid('Received', 'In Preparation', 'Dispatched', 'Delivered').required(),
      orderDate: Joi.date().required(),
      total: Joi.number().precision(2).required(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static getOrderByIdSchema(req, res, next) {
    const schema = Joi.object({
      orderId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }

  static updateOrderSchema(req, res, next) {
    const schema = Joi.object().keys({
      clientId: Joi.number().integer(),
      status: Joi.string().valid('Received', 'In Preparation', 'Dispatched', 'Delivered'),
      orderDate: Joi.date(),
      total: Joi.number().precision(2),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static updateOrderStatusSchema(req, res, next) {
    const schema = Joi.object().keys({
      status: Joi.string().valid('Received', 'In Preparation', 'Dispatched', 'Delivered').required(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static deleteOrderSchema(req, res, next) {
    const schema = Joi.object({
      orderId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }

  static getOrdersByFiltersSchema(req, res, next) {
    const schema = Joi.object({
      clientId: Joi.number().integer().positive(),
      status: Joi.string().valid('Received', 'In Preparation', 'Dispatched', 'Delivered').allow(''),
      startDate: Joi.date(),
      endDate: Joi.date(),
    });
    validateSchema('body', schema)(req, res, next);
  }
}

export default OrderValidation;
