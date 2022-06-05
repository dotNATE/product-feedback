import { GraphQLID, GraphQLString } from "graphql";
import { Suggestion } from "../../../Models";
import { SuggestionType } from "../../TypeDefs";
import jwt from 'jsonwebtoken';

const createSuggestion = {
    type: SuggestionType,
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        detail: { type: GraphQLString },
    },
    async resolve(_: any, args: any, context: any) {
        console.log('createSuggestion invoked with: ', args);
        const { title, category, detail } = args;
        const { authToken } = context;
        const { ACCESS_TOKEN_SECRET } = process.env;

        jwt.verify(authToken, String(ACCESS_TOKEN_SECRET), (error: any, data: any) => {
            if (error) throw new Error("Unauthorised");
        });

        if (title.length === 0 || category.length === 0 || detail.length === 0) {
            throw new Error("You must fill in all fields");
        }

        const newSuggestion = await Suggestion.create({ title, category, detail });

        return newSuggestion;
    },
};

export default createSuggestion;