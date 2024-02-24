import express from 'express';
import authToken from '../../../utils/middlewareAuth.js';
import UserRouter from './UserRoutes.js';
import ClientRouter from './ClientRoutes.js';
import OrderRouter from './OrderRoutes.js';

const allRoutes = express.Router();

allRoutes.use('/', UserRouter);
allRoutes.use('/clients', authToken, ClientRouter);
allRoutes.use('/orders', authToken, OrderRouter);

export default allRoutes;
