import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from './sequelize'

interface FeedbackAttributes {
    id: string,
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
    },
    {
        paranoid: true,
    },
);

export default Feedback;