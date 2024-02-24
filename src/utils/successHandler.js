function successHandler(res, statusCode = 200, message = 'Success', additionalObjects = {}) {
  const response = {
    success: true,
    message,
    ...additionalObjects,
  };

  res.status(statusCode).json(response);
}

export default successHandler;
