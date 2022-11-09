import { Router } from 'express';
import * as userController from '../controllers/user';

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    const results = await userController.getAll();
    return res.status(200).send(results);
});

export default usersRouter;
