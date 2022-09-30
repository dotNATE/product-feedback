import { upvotes } from '../../testData';

export const getOneUpvote = (userId: string, suggestionId: string) => {
  const upvotesByUserId = upvotes.filter(el => el.userId === userId);
  if (!upvotesByUserId.length) {
    return null;
  }

  const upvote = upvotesByUserId.filter(el => el.suggestionId === suggestionId);
  if (!upvote.length) {
    return null;
  }

  return upvote[0];
};
