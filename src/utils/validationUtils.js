function validateSchema(dataType, schema) {
  return (req, res, next) => {
    let data;

    switch (dataType) {
      case 'body':
        data = req.body;
        break;
      case 'query':
        data = req.query;
        break;
      case 'params':
        data = req.params;
        break;
      case 'headers':
        data = req.headers;
        break;
      default:
        data = {};
    }

    const { error } = schema.validate(data);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message,
      });
    }
    return next();
  };
}

export default validateSchema;
