import { GraphQLList, GraphQLID } from "graphql"
import { Op } from "sequelize";
import { Suggestion, User, Upvote } from "../../../Models";
import { SuggestionWithUpvotesType } from "../../TypeDefs"

const getAllSuggestionsWithUpvotes = {
    type: new GraphQLList(SuggestionWithUpvotesType),
    args: {
        userId: { type: GraphQLID },
    },
    resolve: async (_: any, args: any) => {
        console.log('getAllSuggestionsWithUpvotes invoked with: ', args);
        const { userId } = args;

        const user = await User.findOne({
            where: {
                id: userId,
            },
        });

        if (!user) throw new Error("User doesn't exist");

        const suggestions = await Suggestion.findAll({
            order: [['createdAt', 'DESC']],
        });

        return suggestions.map(async suggestion => {
            const { id, title, category, detail, createdBy, upvotes } = suggestion;
            let upvotedByUser = false;
            
            const upvote = await Upvote.findOne({
                where: {
                    [Op.and]: {
                        userId,
                        suggestionId: id,
                    },
                },
            });
            
            if (upvote) upvotedByUser = true;


            return {
                id,
                title,
                category,
                detail,
                createdBy,
                upvotes,
                upvotedByUser,
            }
        });
    },
};

export default getAllSuggestionsWithUpvotes;