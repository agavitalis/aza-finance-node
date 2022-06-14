const transactionResponse = {
  _id: {
    type: 'string',
    example: '605636683f6e29c81c8b2db0',
  },
  customerId: {
    type: 'string',
    example: "605636683f",
  },
  inputAmount: {
    type: 'number',
    example: 5000
  },
  inputCurrency: {
    type: 'string',
    example: "NGN",
  },
  outputAmount: {
    type: 'number',
    example: 2000
  },
  outputCurrency: {
    type: 'string',
    example: "USD",
  },
  createdAt: {
    type: 'string',
    example: '2021-03-19T09:51:01.506Z',
  },
  updatedAt: {
    type: 'string',
    example: '2021-03-19T11:48:25.980Z',
  },
};

const internalServerError = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Internal Server Error',
          },
        },
      },
    },
  },
};

const transactionNotFound = {
  description: 'Resource not found',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Transaction with id: "71675fcb655047cdc4955929" not found',
          },
        },
      },
    },
  },
};

const invalidTransactionData = {
  description: 'Invalid Data provided',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'The fields name and description are required',
          },
        },
      },
    },
  },
};

const requestValidationError = {
  description: 'Request validation Error',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        properties: {
          message: {
            type: 'string',
            example: 'The fields name and description are required',
          },
          field: {
            type: 'array',
            example: 'The fields name and description are required',
          },
        },
      },
    },
  },
};

const security = [
  {
    bearerAuth: [],
  },
];

const createTransactionBody = {
  type: 'object',
  properties: {
    customerId: {
      type: 'string',
      example: "605636683f",
    },
    inputAmount: {
      type: 'number',
      example: 5000
    },
    inputCurrency: {
      type: 'string',
      example: "NGN",
    },
    outputAmount: {
      type: 'number',
      example: 2000
    },
    outputCurrency: {
      type: 'string',
      example: "USD",
    },
  },
};

const updateTransactionBody = {
  type: 'object',
  properties: {
    transactionId: {
      type: 'string',
      required: 'true',
      example: '605636683f6e29c81c8b2db0',
    }
  },
};

const createTransaction = {
  tags: ['Transactions'],
  description: 'Create a new transaction in the system',
  operationId: 'createTransaction',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createTransactionBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '201': {
      description: 'Transaction created successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: transactionResponse,
          },
        },
      },
    },
    '422': invalidTransactionData,
    '500': internalServerError,
  },
};

const getTransactions = {
  tags: ['Transactions'],
  description: 'Retrieve all the transactions',
  operationId: 'getTransactions',
  // security: [
  //   {
  //     bearerAuth: [],
  //   },
  // ],
  responses: {
    '200': {
      description: 'Transactions retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: transactionResponse,
            },
          },
        },
      },
    },
    '500': internalServerError,
  },
};

const getTransaction = {
  tags: ['Transactions'],
  description: 'Retrieve one transaction',
  operationId: 'getTransaction',
  parameters: [
    {
      name: 'transactionId',
      in: 'path',
      description: 'Transaction Id',
      required: 'true',
      type: 'string',
      example: '605636683f6e29c81c8b2db0',
    },
  ],
  responses: {
    '200': {
      description: 'Transaction retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: transactionResponse,
          },
        },
      },
    },
    '404': transactionNotFound,
    '500': internalServerError,
    '400': requestValidationError,
  },
};

const updateTransaction = {
  tags: ['Transactions'],
  description: 'Update a transaction',
  operationId: 'updateTransaction',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/updateTransactionBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'Transaction retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: transactionResponse,
          },
        },
      },
    },
    '404': transactionNotFound,
    '422': invalidTransactionData,
    '500': internalServerError,
  },
};

const deleteTransaction = {
  tags: ['Transactions'],
  description: 'Delete a transaction',
  operationId: 'deleteTransaction',
  parameters: [
    {
      name: 'transactionId',
      in: 'path',
      description: 'Transaction ID',
      required: 'true',
      type: 'string',
      example: '605636683f6e29c81c8b2db0',
    },
  ],
  responses: {
    '200': {
      description: 'Transaction created successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Transaction deleted successfully!',
              },
            },
          },
        },
      },
    },
    '500': internalServerError,
  },
};

export {
  createTransaction,
  createTransactionBody,
  updateTransactionBody,
  deleteTransaction,
  getTransactions,
  getTransaction,
  updateTransaction
};
