import { Router } from 'express';
import * as expenseController from '../controllers/expense';

const expensesRouter = Router();

expensesRouter.get('/', async (req, res) => {
    const results = await expenseController.getAll();
    return res.status(200).send(results);
});

export default expensesRouter;
