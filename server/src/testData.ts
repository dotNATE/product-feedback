export const users = [
  {
    id: 'fb26d3d6-9a08-454f-9859-76a1a24febfb',
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@test.com',
    username: 'Testy',
    password: 'secret',
  },
  {
    id: '69d41fa0-ef71-4530-8d11-5c87bec55462',
    firstName: 'Test2',
    lastName: 'User2',
    email: 'testuser2@test.com',
    username: 'Testy II',
    password: 'secret',
  },
];

export const upvotes = [
  {
    id: '198924ab-9ee7-4441-8a4a-6517b43c003b',
    userId: 'fb26d3d6-9a08-454f-9859-76a1a24febfb',
    suggestionId: '86cef242-6e58-4ee3-8877-e8b4534e705d',
  },
  {
    id: '4a2d40a9-f88c-45b4-98a8-cdf717758c4e',
    userId: 'fb26d3d6-9a08-454f-9859-76a1a24febfb',
    suggestionId: 'd01f976e-156e-4a2a-bc4e-44247ec6446b',
  },
  {
    id: '815954b4-659c-4816-a373-589da1e9b467',
    userId: '69d41fa0-ef71-4530-8d11-5c87bec55462',
    suggestionId: 'd01f976e-156e-4a2a-bc4e-44247ec6446b',
  },
];

export const suggestions = [
  {
    id: '86cef242-6e58-4ee3-8877-e8b4534e705d',
    title: 'Test Suggestion 1',
    category: 'bug',
    detail: 'Lorem ipsum et cetera',
    createdBy: 'fb26d3d6-9a08-454f-9859-76a1a24febfb',
    upvotes: upvotes.filter(
      el => el.suggestionId === '86cef242-6e58-4ee3-8877-e8b4534e705d'
    ).length,
    createdAt: '2022-06-18 14:00:00',
  },
  {
    id: 'd01f976e-156e-4a2a-bc4e-44247ec6446b',
    title: 'Test Suggestion 2',
    category: 'feature',
    detail: 'This is the description',
    createdBy: 'fb26d3d6-9a08-454f-9859-76a1a24febfb',
    upvotes: upvotes.filter(
      el => el.suggestionId === 'd01f976e-156e-4a2a-bc4e-44247ec6446b'
    ).length,
    createdAt: '2022-06-12 12:00:00',
  },
];
