import { Expense } from '../models';

export const getAll = (): Promise<Expense[]> => {
    return Expense.findAll();
};
