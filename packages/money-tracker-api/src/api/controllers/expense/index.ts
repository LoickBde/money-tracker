import * as service from '../../../db/services/expenseService';
import { IExpense } from '../../interfaces';

export const getAll = async (): Promise<IExpense[]> => {
    return await service.getAll();
};
