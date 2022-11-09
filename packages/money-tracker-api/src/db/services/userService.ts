import * as userDal from '../dal/user';
import { User } from '../models';

export const getAll = (): Promise<User[]> => {
    return userDal.getAll();
};
