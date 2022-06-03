import { GraphQLObjectType, GraphQLString } from 'graphql';

const AuthTokenType = new GraphQLObjectType({
    name: "AuthToken",
    fields: () => ({
        token: { type: GraphQLString },
    }),
});

export default AuthTokenType;