import { sequelize } from './Models/sequelize';
import { Suggestion, Upvote, User } from './Models';
import { suggestions, upvotes, users } from './testData';

beforeEach(async () => {
    await sequelize.sync({ force: true });
    await Suggestion.bulkCreate(suggestions);
    await Upvote.bulkCreate(upvotes);
    await User.bulkCreate(users);
});

afterEach(async () => {
    await sequelize.drop();
});