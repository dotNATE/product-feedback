import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '.'

interface UserAttributes {
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
}

interface UserCreationAttributes
    extends Optional<UserAttributes, 'id'>{}

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{
        createdAt?: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }

const User = sequelize.define<UserInstance>(
    'User',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },
        firstName: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        lastName: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        username: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        password: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    },
    {
        paranoid: true,
    },
);

export default User;