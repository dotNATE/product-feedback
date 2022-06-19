import { GraphQLID, GraphQLString } from "graphql";
import { SuggestionType } from "../../TypeDefs";

import { isAuthenticated } from "../../../helpers/auth";
import { createNewSuggestion } from "../../../helpers/suggestions";

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

        return await createNewSuggestion(title, category, detail, createdBy);
    },
};

export default createSuggestion;