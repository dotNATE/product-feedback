import { isAuthenticated } from '../helpers/auth';
import {
  refreshUpvoteCount,
  getOneUpvote,
  createNewUpvote,
} from '../helpers/upvotes';

export const resolveAddUpvote = async (
  _: any,
  { userId, suggestionId }: any,
  { authToken }: any
) => {
  isAuthenticated(authToken);

  const upvote = await getOneUpvote(userId, suggestionId);
  if (upvote) throw new Error('Upvote already exists');

  await createNewUpvote(userId, suggestionId);

  refreshUpvoteCount(suggestionId);

  return { success: true, message: 'Upvote successful' };
};

export const resolveRemoveUpvote = async (
  _: any,
  { userId, suggestionId }: any,
  { authToken }: any
) => {
  isAuthenticated(authToken);

  const upvote = await getOneUpvote(userId, suggestionId);

  if (!upvote) {
    throw new Error('Upvote does not exist!');
  }

  await upvote.destroy();

  await refreshUpvoteCount(suggestionId);

  return { success: true, message: 'Upvote removed successfully' };
};
