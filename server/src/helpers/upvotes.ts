import { Suggestion, Upvote } from '../Models';
import { Op } from 'sequelize';
import { UpvoteInstance } from '../Models/Upvote';

export const createNewUpvote = async (
  userId: string,
  suggestionId: string
): Promise<UpvoteInstance> =>
  Upvote.create({
    userId,
    suggestionId,
  });

export const getOneUpvote = async (
  userId: string,
  suggestionId: string
): Promise<UpvoteInstance | null> =>
  Upvote.findOne({
    where: {
      [Op.and]: [{ userId }, { suggestionId }],
    },
  });

export const refreshUpvoteCount = async (
  suggestionId: string
): Promise<Array<Number>> => {
  const upvoteCount = await Upvote.count({
    where: {
      suggestionId,
    },
  });

  return await Suggestion.update(
    { upvotes: upvoteCount },
    {
      where: {
        id: suggestionId,
      },
    }
  );
};
