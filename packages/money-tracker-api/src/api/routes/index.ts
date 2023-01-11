import { Router } from 'express';
import usersRouter from './users';
import expensesRouter from './expenses';

const router = Router();

router.use('/users', usersRouter);
router.use('/expenses', expensesRouter);

export default router;
