import { Request, Response } from 'express';
import { transactionRepository } from '../infra/repositories/index';
import { Transaction, TransactionInput } from '../models/transaction.model';

const createTransaction = async (req: Request, res: Response) => {
  const {
    customerId,
    inputAmount,
    inputCurrency,
    outputAmount,
    outputCurrency 
  } = req.body;

  const transactionInput: TransactionInput = {
    customerId,
    inputAmount,
    inputCurrency,
    outputAmount,
    outputCurrency
  };

  const transactionCreated = await transactionRepository.create(transactionInput);

  return res.status(201).json({ data: transactionCreated });
};

const getAllTransactions = async (req: Request, res: Response) => {
  const transactions = await transactionRepository.getAll({});
  return res.status(200).json({ data: transactions });
};

const getTransaction = async (req: Request, res: Response) => {
  const { transactionId } = req.params;
  const transaction = await transactionRepository.getOne(transactionId);

  if (!transaction) {
    return res.status(404).json({ message: `Transaction with id "${transactionId}" not found.` });
  }

  return res.status(200).json({ data: transaction });
};

const updateTransaction = async (req: Request, res: Response) => {

  const { transactionId } = req.body;
  const transaction = await transactionRepository.getOne(transactionId);

  if (!transaction) {
    return res.status(404).json({ message: `Transaction with id "${transactionId}" not found.` });
  }

  const transactionUpdated = await transactionRepository.updateOne(transaction, req.body );
  return res.status(200).json({ data: transactionUpdated });
};

const deleteTransaction = async (req: Request, res: Response) => {

  const { transactionId } = req.params;
  const transaction = await transactionRepository.getOne(transactionId);

  if (!transaction) {
    return res.status(404).json({ message: `Transaction with id "${transactionId}" not found.` });
  }

  await transactionRepository.deleteOne(transactionId);
  return res.status(200).json({ message: 'Transaction deleted successfully.' });
};

export { createTransaction, deleteTransaction, getAllTransactions, getTransaction, updateTransaction };
