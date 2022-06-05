import { GraphQLList } from "graphql"
import { Suggestion } from "../../../Models";
import { SuggestionType } from "../../TypeDefs"

const getAllSuggestions = {
    type: new GraphQLList(SuggestionType),
    resolve() {
        console.log('getAllSuggestions invoked');
        const suggestions = Suggestion.findAll({
            order: [['createdAt', 'DESC']]
        });

        return suggestions;
    },
};

export default getAllSuggestions;