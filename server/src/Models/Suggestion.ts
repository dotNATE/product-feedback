import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from './sequelize'

interface SuggestionAttributes {
    id: string,
    title: string,
    category: string,
    detail: string,
}

interface SuggestionCreationAttributes
    extends Optional<SuggestionAttributes, 'id'>{}

interface SuggestionInstance
    extends Model<SuggestionAttributes, SuggestionCreationAttributes>, SuggestionAttributes{
        createdAt?: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }

const Suggestion = sequelize.define<SuggestionInstance>(
    'Suggestion',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },
        title: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        category: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        detail: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    },
    {
        paranoid: true,
    },
);

export default Suggestion;