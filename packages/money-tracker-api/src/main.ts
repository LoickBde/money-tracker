import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import DataStore from 'nedb';
import { clientDemo } from './utils/db-config';

dotenv.config();

// db
const db = new DataStore({ filename: 'packages/money-tracker-api/money-tracker.db' });
db.loadDatabase();

// server
const app = express();
const port = process.env.port || 3333;

app.use(express.json());

app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to money-tracker-api!' });
});

app.post('/api/expense', (req: Request, res: Response) => {
    db.insert(req.body, (err: Error, document) => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        res.status(201).send(document);
    });
});

app.get('/api/expense', (req: Request, res: Response) => {
    db.find({}, (err: Error, document) => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        if (!document.length) {
            res.sendStatus(404);
            return;
        }
        res.status(200).send(document);
    });
});

app.get('/api/expense/:id', (req: Request, res: Response) => {
    db.find({ _id: req.params.id }, (err: Error, document) => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        if (!document.length) {
            res.sendStatus(404);
            return;
        }
        res.status(200).send(document);
    });
});

app.patch('/api/expense/:id', (req: Request, res: Response) => {
    db.update({ _id: req.params.id }, { $set: { ...req.body } }, {}, (err: Error, numberOfUpdated: number) => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        if (!numberOfUpdated) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(200);
    });
});

app.delete('/api/expense/:id', (req: Request, res: Response) => {
    db.remove({ _id: req.params.id }, (err: Error, n: number) => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        if (!n) {
            res.sendStatus(404);
            return;
        }

        res.sendStatus(200);
    });
});

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

clientDemo();
