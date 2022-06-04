import { GraphQLObjectType, GraphQLString } from 'graphql';

const AuthTokenType = new GraphQLObjectType({
    name: "AuthToken",
    fields: () => ({
        token: { type: GraphQLString },
        id: { type: GraphQLString },
    }),
});

export default AuthTokenType;