import { body, check } from 'express-validator';

export const createTransactionValidator = [
  body('customerId').isString().isLength({ min: 3, max: 24 }).withMessage('customerId is required'),
  body('inputAmount').isNumeric().withMessage('inputAmount is required'),
  body('inputCurrency').isString().withMessage('inputCurrency is required'),
  body('outputAmount').isNumeric().withMessage('outputAmount is required'),
  body('outputCurrency').isString().withMessage('outputCurrency is required'),
]
export const getTransactionValidator = [
  check('transactionId').isString().isMongoId().isLength({ min: 24, max: 24 }).withMessage('transactionId is required'),
]

export const updateTransactionValidator = [
  body('transactionId').isString().isMongoId().withMessage('transactionId is required'),
]

export const deleteTransactionValidator = [
  check('transactionId').isString().isMongoId().withMessage('transactionId is required'),
]

