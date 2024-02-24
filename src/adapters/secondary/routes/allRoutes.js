import express from 'express';
import UserRouter from './UserRoutes.js';
import ClientRouter from './ClientRoutes.js';

const allRoutes = express.Router();

allRoutes.use('/', UserRouter);
allRoutes.use('/clients', ClientRouter);

export default allRoutes;
