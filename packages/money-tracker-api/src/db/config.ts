import { Dialect, Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
});

export default sequelizeConnection;
