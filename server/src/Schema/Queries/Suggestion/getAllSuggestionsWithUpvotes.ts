import { GraphQLList, GraphQLID } from "graphql"

import { getAllSuggestions, mapUpvoteCountToSuggestionsByUserId } from "../../../helpers/suggestions";
import { getUserById } from "../../../helpers/users";
import { SuggestionWithUpvotesType } from "../../TypeDefs"

const getAllSuggestionsWithUpvotes = {
    type: new GraphQLList(SuggestionWithUpvotesType),
    args: {
        userId: { type: GraphQLID },
    },
    resolve: async (_: any, { userId }: any) => {
        const user = await getUserById(userId);
        if (!user) throw new Error("User doesn't exist");

        const suggestions = await getAllSuggestions();
        
        return await mapUpvoteCountToSuggestionsByUserId(suggestions, userId);
    },
};

export default getAllSuggestionsWithUpvotes;