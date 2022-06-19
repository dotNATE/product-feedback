import { GraphQLList, GraphQLID } from "graphql";
import { SuggestionWithUpvotesType } from "../../TypeDefs";

import { resolveGetAllSuggestionsWithUpvotes } from "../../../resolvers/suggestion";

const getAllSuggestionsWithUpvotes = {
    type: new GraphQLList(SuggestionWithUpvotesType),
    args: {
        userId: { type: GraphQLID },
    },
    resolve: resolveGetAllSuggestionsWithUpvotes,
};

export default getAllSuggestionsWithUpvotes;