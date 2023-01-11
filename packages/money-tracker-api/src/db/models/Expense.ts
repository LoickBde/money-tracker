import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelizeConnection from '../config';
import { User } from '.';

class Expense extends Model<InferAttributes<Expense>, InferCreationAttributes<Expense>> {
    declare id: CreationOptional<number>;
    declare tag: string;
    declare amount: number;
    declare description: CreationOptional<string>;
}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    { tableName: 'expenses', timestamps: false, sequelize: sequelizeConnection },
);

User.hasMany(Expense);

Expense.belongsTo(User, { foreignKey: 'userId' });

export default Expense;
