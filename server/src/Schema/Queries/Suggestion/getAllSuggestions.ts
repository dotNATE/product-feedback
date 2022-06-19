import { GraphQLList } from "graphql"

import { getAllSuggestions as getAllSuggestionsHelper } from "../../../helpers/suggestions";
import { SuggestionType } from "../../TypeDefs"

const getAllSuggestions = {
    type: new GraphQLList(SuggestionType),
    resolve: async () => {
        return await getAllSuggestionsHelper();
    },
};

export default getAllSuggestions;