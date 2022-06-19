import { Suggestion, Upvote } from '../Models';

export default async (suggestionId: string) => {
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