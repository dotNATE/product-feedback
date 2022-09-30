import { isAuthenticated } from '../helpers/auth';
import {
  createNewSuggestion,
  getAllSuggestions,
  mapUpvoteCountToSuggestionsByUserId,
} from '../helpers/suggestions';
import { getUserById } from '../helpers/users';

export const resolveCreateSuggestion = async (
  _: any,
  { title, category, detail, createdBy }: any,
  { authToken }: any
) => {
  isAuthenticated(authToken);

  if (title.length === 0 || category.length === 0 || detail.length === 0) {
    throw new Error('You must fill in all fields');
  }

  return await createNewSuggestion(title, category, detail, createdBy);
};

export const resolveGetAllSuggestions = async () => {
  return await getAllSuggestions();
};

export const resolveGetAllSuggestionsWithUpvotes = async (
  _: any,
  { userId }: any
) => {
  const user = await getUserById(userId);
  if (!user) throw new Error("User doesn't exist");

  const suggestions = await getAllSuggestions();

  return await mapUpvoteCountToSuggestionsByUserId(suggestions, userId);
};
