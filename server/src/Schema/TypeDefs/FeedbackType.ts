import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const FeedbackType = new GraphQLObjectType({
    name: "Feedback",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        detail: { type: GraphQLString },
    }),
});

export default FeedbackType;