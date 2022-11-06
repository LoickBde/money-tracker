import { User } from '../models';

export const getAll = (): Promise<User[]> => {
    return User.findAll();
};
