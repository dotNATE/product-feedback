import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from './sequelize'
import Suggestion from "./Suggestion";

interface UserAttributes {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
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
        email: {
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

User.hasMany(Suggestion, {
    foreignKey: 'createdBy',
    as: 'suggestions',
});

Suggestion.belongsTo(User, {
    foreignKey: 'id',
    as: 'user',
});

export default User;