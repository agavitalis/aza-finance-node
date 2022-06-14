import { Router } from 'express';
import { createTransaction, deleteTransaction, getAllTransactions, getTransaction, updateTransaction } from '../controllers/transaction.controller';
import { validateRequest, paginateResponse } from '../middlewares/index';
import * as v from '../validators/index'

const transactionRoute = () => {
  const router = Router();

  router.post('/transactions',v.createTransactionValidator, validateRequest, createTransaction);

  router.get('/transactions', getAllTransactions);

  router.get('/transactions/:transactionId',v.getTransactionValidator,validateRequest, getTransaction);

  router.patch('/transactions',v.updateTransactionValidator,validateRequest, updateTransaction);

  router.delete('/transactions/:transactionId',v.deleteTransactionValidator,validateRequest, deleteTransaction);

  return router;
};

export { transactionRoute };
