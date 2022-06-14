
import {
  createTransactionBody,
  updateTransactionBody,
  createTransaction,
  deleteTransaction,
  getTransaction,
  getTransactions,
  updateTransaction
} from './transaction';

const apiDocumentation = {
  openapi: '3.0.3',
  info: {
    version: '1.3.0',
    title: 'Transactions APP REST API - Documentation',
    description: 'Description of my API here',
    termsOfService: 'https://mysite.com/terms',
    contact: {
      name: 'Developer name',
      email: 'dev@example.com',
      url: 'https://devwebsite.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000/',
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Transactions',
      description: 'Transactions API documentations'
    },
  ],
  paths: {
    '/transactions': {
      post: createTransaction,
      get: getTransactions,
      patch: updateTransaction,
    },
    '/transactions/{transactionId}': {
      delete: deleteTransaction,
      get: getTransaction,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      createTransactionBody,
      updateTransactionBody,
    },
  },
};

export { apiDocumentation };
