import * as dotenv from 'dotenv';
import express from 'express';
import sequelizeConnection from './db/config';
import routes from './api/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.use('/api/v1', routes);

app.get('/api/v1', (req, res) => {
    res.send({ message: 'Welcome to money-tracker-api!' });
});

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelizeConnection.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    console.log(`Starting Sequelize and Express on port ${port}...`);
    await assertDatabaseConnectionOk();
    const server = app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);
}

init();
