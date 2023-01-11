import * as expenseDal from '../dal/expense';
import { Expense } from '../models';

export const getAll = (): Promise<Expense[]> => {
    return expenseDal.getAll();
};
