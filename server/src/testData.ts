export const users = [
    {
        id: "fb26d3d6-9a08-454f-9859-76a1a24febfb",
        firstName: "Test",
        lastName: "User",
        email: "testuser@test.com",
        username: "Testy",
        password: "secret",
    },
];

export const upvotes = [
    {
        id: "198924ab-9ee7-4441-8a4a-6517b43c003b",
        userId: "fb26d3d6-9a08-454f-9859-76a1a24febfb",
        suggestionId: "86cef242-6e58-4ee3-8877-e8b4534e705d",
    },
];

export const suggestions = [
    {
        id: "86cef242-6e58-4ee3-8877-e8b4534e705d",
        title: "Test Suggestion 1",
        category: "bug",
        detail: "Lorem ipsum et cetera",
        createdBy: "fb26d3d6-9a08-454f-9859-76a1a24febfb",
        upvotes: upvotes.filter(el => el.suggestionId === "86cef242-6e58-4ee3-8877-e8b4534e705d").length,
    },
];