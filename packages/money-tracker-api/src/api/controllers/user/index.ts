import * as service from '../../../db/services/userService';
import { IUser } from '../../interfaces';

export const getAll = async (): Promise<IUser[]> => {
    return await service.getAll();
};
