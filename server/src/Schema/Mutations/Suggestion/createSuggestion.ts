import { GraphQLID, GraphQLString } from "graphql";
import { Suggestion } from "../../../Models";
import { SuggestionType } from "../../TypeDefs";

import { isAuthenticated } from "../../../helpers/auth";

const createSuggestion = {
    type: SuggestionType,
    args: {
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        detail: { type: GraphQLString },
        createdBy: { type: GraphQLID },
    },
    async resolve(_: any, { title, category, detail, createdBy }: any, { authToken }: any) {
        isAuthenticated(authToken);

        if (title.length === 0 || category.length === 0 || detail.length === 0) {
            throw new Error("You must fill in all fields");
        }

        const newSuggestion = await Suggestion.create({ title, category, detail, createdBy, upvotes: 0 });

        return newSuggestion;
    },
};

export default createSuggestion;