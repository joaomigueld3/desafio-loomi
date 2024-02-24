import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import allRoutes from './adapters/secondary/routes/AllRoutes.js';

dotenv.config({ path: '.env' });

const { PORT } = process.env;

import('./database/index.js');

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(morgan('dev'));

app.use(allRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${PORT}`);
});
