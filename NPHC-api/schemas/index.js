const Joi = require('joi');

const schemas = {
  greetingsSchema: Joi.object().keys({
    message: Joi.string().min(5).required(),
    name: Joi.string().min(5).required()
  }).unknown(true),
  deleteSchema: Joi.object().keys({
    Id: Joi.number().required()
  }).unknown(true)
};

module.exports = schemas;