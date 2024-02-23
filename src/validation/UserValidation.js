import Joi from 'joi';
import validateSchema from '../utils/validationUtils.js';

class UserValidation {
  static createUserValidation(req, res, next) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      type: Joi.string().valid('Admin', 'Client').required(),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static getUserByIdSchema(req, res, next) {
    const schema = Joi.object({
      id: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }

  static updateUserByIdSchema(req, res, next) {
    const schema = Joi.object({
      id: Joi.number().integer().required(),
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      type: Joi.string().valid('Admin', 'Client'),
    });
    validateSchema('body', schema)(req, res, next);
  }

  static deleteUserByIdSchema(req, res, next) {
    const schema = Joi.object({
      id: Joi.number().integer().required(),
    });
    validateSchema('params', schema)(req, res, next);
  }
}
export default UserValidation;
