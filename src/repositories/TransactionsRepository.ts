/* eslint-disable no-param-reassign */
import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
export default class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();
    const balance = await transactions.reduce(
      (acumulator: Balance, transaction) => {
        switch (transaction.type) {
          case 'income':
            acumulator.income += Number(transaction.value);
            acumulator.total += Number(transaction.value);
            break;
          case 'outcome':
            acumulator.outcome += Number(transaction.value);
            acumulator.total -= Number(transaction.value);
            break;

          default:
            break;
        }
        return acumulator;
      },
      { income: 0, outcome: 0, total: 0 },
    );
    return balance;
  }
}
