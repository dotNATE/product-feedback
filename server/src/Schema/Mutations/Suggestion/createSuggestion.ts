import { GraphQLID, GraphQLString } from "graphql";
import { Suggestion } from "../../../Models";
import { SuggestionType } from "../../TypeDefs";

const createSuggestion = {
    type: SuggestionType,
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        detail: { type: GraphQLString },
    },
    async resolve(_: any, args: any) {
        console.log('createSuggestion invoked with: ', args);
        const { title, category, detail } = args;

        if (title.length === 0 || category.length === 0 || detail.length === 0) {
            throw new Error("You must fill in all fields");
        }

        const newSuggestion = await Suggestion.create({ title, category, detail });

        return newSuggestion;
    },
};

export default createSuggestion;