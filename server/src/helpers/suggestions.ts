import { Suggestion } from '../Models';
import { SuggestionInstance } from '../Models/Suggestion';

import { getOneUpvote } from './upvotes';

interface SuggestionInterface {
  id: string;
  title: string;
  category: string;
  detail: string;
  createdBy: string;
  upvotes: number;
}

export const createNewSuggestion = async (
  title: string,
  category: string,
  detail: string,
  createdBy: string
): Promise<SuggestionInstance> =>
  Suggestion.create({
    title,
    category,
    detail,
    createdBy,
    upvotes: 0,
  });

export const getAllSuggestions = async (): Promise<Array<SuggestionInstance>> =>
  Suggestion.findAll({
    order: [['createdAt', 'DESC']],
  });

export const mapUpvoteCountToSuggestionsByUserId = async (
  suggestions: SuggestionInstance[],
  userId: string
): Promise<Array<Promise<SuggestionInterface>>> => {
  return suggestions.map(async suggestion => {
    const { id, title, category, detail, createdBy, upvotes } = suggestion;
    let upvotedByUser = false;

    const upvote = await getOneUpvote(userId, suggestion.id);

    if (upvote) upvotedByUser = true;

    return {
      id,
      title,
      category,
      detail,
      createdBy,
      upvotes,
      upvotedByUser,
    };
  });
};
