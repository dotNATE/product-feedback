import User from './User';
import Suggestion from './Suggestion';
import Upvote from './Upvote';

User.hasMany(Suggestion, {
    foreignKey: 'createdBy',
    as: 'suggestions',
});

Suggestion.belongsTo(User, {
    foreignKey: 'id',
    as: 'user',
});

User.hasMany(Upvote, {
    foreignKey: 'userId',
    as: 'upvotes',
});

Upvote.belongsTo(User, {
    foreignKey: 'id',
    as: 'user',
});

Suggestion.hasMany(Upvote, {
    foreignKey: 'suggestionId',
    as: 'upvotes',
});

Upvote.belongsTo(Suggestion, {
    foreignKey: 'id',
    as: 'suggestion',
});

export { User, Suggestion, Upvote };