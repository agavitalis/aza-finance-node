import mongoose, { Schema, Model, Document } from 'mongoose';

type TransactionDocument = Document & {
  customerId: string;
  inputAmount: string;
  inputCurrency: string;
  outputAmount: string;
  outputCurrency: string;
  createdAt: Date;
  updatedAt: Date;
};

type TransactionInput = {
  customerId: TransactionDocument['customerId'];
  inputAmount: TransactionDocument['inputAmount'];
  inputCurrency: TransactionDocument['inputCurrency'];
  outputAmount: TransactionDocument['outputAmount'];
  outputCurrency: TransactionDocument['outputCurrency'];
};

const transactionSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.String,
      required: true,
    },
    inputAmount: {
      type: Schema.Types.Number,
      required: true,
    },
    inputCurrency: {
      type: Schema.Types.String,
      required: true,
    },
    outputAmount: {
      type: Schema.Types.Number,
      required: true,
    },
    outputCurrency: {
      type: Schema.Types.String,
      required: true,
    }
  },
  {
    collection: 'transactions',
    timestamps: true,
  },
);

const Transaction: Model<TransactionDocument> = mongoose.model<TransactionDocument>('Transaction', transactionSchema);

export { Transaction, TransactionInput, TransactionDocument };
