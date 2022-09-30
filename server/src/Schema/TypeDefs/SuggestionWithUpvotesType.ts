import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

const SuggestionWithUpvotesType = new GraphQLObjectType({
  name: 'SuggestionWithUpvotes',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    category: { type: GraphQLString },
    detail: { type: GraphQLString },
    createdBy: { type: GraphQLID },
    upvotes: { type: GraphQLInt },
    upvotedByUser: { type: GraphQLBoolean },
  }),
});

export default SuggestionWithUpvotesType;
