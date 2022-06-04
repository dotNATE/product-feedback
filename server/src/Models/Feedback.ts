import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from './sequelize'

interface FeedbackAttributes {
    id: string,
    title: string,
    category: string,
    detail: string,
}

interface FeedbackCreationAttributes
    extends Optional<FeedbackAttributes, 'id'>{}

interface FeedbackInstance
    extends Model<FeedbackAttributes, FeedbackCreationAttributes>, FeedbackAttributes{
        createdAt?: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }

const Feedback = sequelize.define<FeedbackInstance>(
    'Feedback',
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

export default Feedback;