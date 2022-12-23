import express from 'express';
import errorMiddleware from './Middlewares/errorMiddleware';
import carRoute from './Routes/cars.route';
import motorcycleRoute from './Routes/motorcycles.route';

const app = express();

app.use(express.json());
app.use('/cars', carRoute);
app.use('/motorcycles', motorcycleRoute);
app.use(errorMiddleware);

export default app;
