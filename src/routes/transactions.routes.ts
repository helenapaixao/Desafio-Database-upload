import { Router } from 'express';

import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const TransactionsRepository = getCustomRepository(TransactionsRepository);
  const transactions = await TransactionsRepository.find();
  return response.json(transactions);
});

transactionsRouter.post('/', async (request, response) => {
  const {} = request.body;
  const CreateTransactionService = new CreateTransactionService();
  const transaction = await createTransaction.execute({});
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
});

transactionsRouter.post('/import', async (request, response) => {
  // TODO
});

export default transactionsRouter;
