import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { getAllUsers } from './utils/db-config';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to money-tracker-api!' });
});

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

getAllUsers();
