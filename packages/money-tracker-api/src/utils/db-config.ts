import { Client } from 'pg';

export async function clientDemo() {
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });
    await client.connect();
    const now = await client.query('SELECT * from users');
    console.log(now.rows);
    await client.end();
}
