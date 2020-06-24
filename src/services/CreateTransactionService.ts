import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository'
import { getCustomRepository } from 'typeorm';


interface Request {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category_id: string;
}
class CreateTransactionService {
  public async execute({
    id,
    title,
    type,
    value,
    category_id,
  }: Request): Promise<Transaction> {

    const TransactionsRepository = getCustomRepository(TransactionsRepository);


  const transaction
  id,
  title,
  type,
  value,
  category_id
  });

  await TransactionsRepository.save(transaction);
  return transaction;

}

export default CreateTransactionService;

//title, value, type, e category
//id, title, value, type, category_id, created_at, updated_at
