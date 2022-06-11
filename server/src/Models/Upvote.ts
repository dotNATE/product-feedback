import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from './sequelize';

interface UpvoteAttributes {
    id: string,
    userId: string,
    suggestionId: string,
}

interface UpvoteCreationAttributes
    extends Optional<UpvoteAttributes, 'id'>{}

interface UpvoteInstance
    extends Model<UpvoteAttributes, UpvoteCreationAttributes>, UpvoteAttributes{
        createdAt?: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }

const Upvote = sequelize.define<UpvoteInstance>(
    'Upvote',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        suggestionId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
    },
    {
        paranoid: true,
    },
);

export default Upvote;