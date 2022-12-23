import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.message === 'Car not found' || err.message === 'Motorcycle not found') {
    return res.status(404).json({ message: err.message });
  } if (err.message === 'Invalid mongo id') {
    return res.status(422).json({ message: err.message });
  }
  if (err.status) { return res.status(err.status).json({ message: err.message }); }
  return res.status(500).json({ message: err.message });
};

export default errorMiddleware;