import { Suggestion } from '../Models';
import { SuggestionInstance } from '../Models/Suggestion';

import { getOneUpvote } from './upvotes';

export const getAllSuggestions = async () => {
    return await Suggestion.findAll({
        order: [['createdAt', 'DESC']],
    });
};

export const mapUpvoteCountToSuggestionsByUserId = async (suggestions: SuggestionInstance[], userId: string) => {
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