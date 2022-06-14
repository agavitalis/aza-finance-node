import { Transaction } from '../../models/index';
import { IBaseRepository } from '../interfaces/index';

class TransactionRepository implements IBaseRepository {

  async create(query) {
    return await Transaction.create(query);
  }

  async getAll(query) {
    return await Transaction.find(query).sort('-createdAt');
  }

  async getOne(transactionId) {

    console.log("62a628a2cff911d35e6cca1f", transactionId)
    return await Transaction.findOne({ _id: transactionId })
  }

  async updateOne(transaction, updateParams) {
    const { transactionId } = updateParams;
    await Object.assign(transaction, updateParams).save();
    return await this.getOne(transactionId);
  }

  async deleteOne(transactionId) {
    return await Transaction.findByIdAndDelete(transactionId);;
  }

}

export const transactionRepository = new TransactionRepository();


