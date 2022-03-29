const HttpStatus = require('http-status-codes');

module.exports.validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  const valid = error == null;
  if (valid) {
    next();
  } else {
    const { details } = error;
    const body = {
      message: 'Bad request',
      errors: details.map(error => error.message)
    }
    res.status(HttpStatus.StatusCodes.BAD_REQUEST).json(body)
  }
};

module.exports.validatePath = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.params);
  const valid = error == null;
  if (valid) {
    next();
  } else {
    const { details } = error;
    const body = {
      message: 'Bad request',
      errors: details.map(error => error.message)
    }
    res.status(HttpStatus.StatusCodes.BAD_REQUEST).json(body);
  }
};