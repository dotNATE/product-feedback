import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const SuggestionType = new GraphQLObjectType({
    name: "Suggestion",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        detail: { type: GraphQLString },
        createdBy: { type: GraphQLID },
    }),
});

export default SuggestionType;