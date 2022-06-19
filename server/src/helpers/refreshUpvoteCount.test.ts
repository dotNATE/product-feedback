import refreshUpvoteCount from './refreshUpvoteCount';

import { sequelize } from '../Models/sequelize'
import { Upvote, Suggestion } from '../Models'

const users = [
    {
        id: "fb26d3d6-9a08-454f-9859-76a1a24febfb",
        firstName: "Test",
        lastName: "User",
        email: "testuser@test.com",
        username: "Testy",
        password: "secret",
    },
]

const suggestions = [
    {
        id: "86cef242-6e58-4ee3-8877-e8b4534e705d",
        title: "Test Suggestion 1",
        category: "bug",
        detail: "Lorem ipsum et cetera",
        createdBy: "fb26d3d6-9a08-454f-9859-76a1a24febfb",
        upvotes: 0,
    },
]

const upvotes = [
    {
        id: "198924ab-9ee7-4441-8a4a-6517b43c003b",
        userId: "fb26d3d6-9a08-454f-9859-76a1a24febfb",
        suggestionId: "86cef242-6e58-4ee3-8877-e8b4534e705d",
    },
]

describe("refreshUpvoteCount", () => {
    beforeEach(async () => {
        await sequelize.sync({ force: true });
        await Suggestion.bulkCreate(suggestions);
        await Upvote.bulkCreate(upvotes);
    });

    afterEach(async () => {
        await sequelize.drop();
    })

    it("runs", async () => {
        const id = suggestions[0].id
        const [affectedRows] = await refreshUpvoteCount(id);

        expect(affectedRows).toEqual(1);
    });
});