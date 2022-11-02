import { Dialect, Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
});

class User extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize: sequelize, tableName: 'users', timestamps: false },
);

export async function getAllUsers() {
    const users = await User.findAll();
    console.log(users.every((user) => user instanceof User)); // true
    console.log('All users:', JSON.stringify(users, null, 2));
}
