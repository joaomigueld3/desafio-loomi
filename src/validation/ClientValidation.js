import Joi from 'joi';
import validateSchema from '../utils/validationUtils.js';

class ClientValidation {
  static getAllClientsSchema(req, res, next) {
    next();
  }

  static getClientByIdSchema(req, res, next) {
    const schema = Joi.object({
      clientId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }

  static createClientSchema(req, res, next) {
    const schema = Joi.object({
      fullName: Joi.string().required(),
      contact: Joi.string().required(),
      address: Joi.string().allow(''),
      status: Joi.boolean().required(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static updateClientSchema(req, res, next) {
    const schema = Joi.object({
      fullName: Joi.string(),
      contact: Joi.string(),
      address: Joi.string().allow(''),
      status: Joi.boolean(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static deleteClientSchema(req, res, next) {
    const schema = Joi.object({
      clientId: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }
}

export default ClientValidation;
