import { Suggestion, Upvote } from '../Models';
import { Op } from 'sequelize';

export const createNewUpvote = async (userId: string, suggestionId: string) => {
    return await Upvote.create({
        userId,
        suggestionId
    });
};

export const getOneUpvote = async (userId: string, suggestionId: string) => {
    return await Upvote.findOne({
        where: {
            [Op.and]: [
                { userId },
                { suggestionId }
            ],
        },
    });
};

export const refreshUpvoteCount = async (suggestionId: string) => {
    const upvoteCount = await Upvote.count({
        where: {
            suggestionId,
        },
    });

    return await Suggestion.update({ upvotes: upvoteCount }, {
        where: {
            id: suggestionId,
        },
    });
};