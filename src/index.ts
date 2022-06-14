import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import { connectToDatabase } from './database.connection';
import { transactionRoute } from './routes/api.route';
import { apiDocumentation } from './docs/apidoc';
import { errorHandler } from './middlewares/index';
import { NotFoundError } from './errors/not-found-error'

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', transactionRoute());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to Aza-Finance Open API Specifications!' });
});

app.all('*', () => {
  throw new NotFoundError('Route Not Found')
})

app.use(errorHandler)

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
