import { GraphQLObjectType, GraphQLSchema } from "graphql";
import mutations from "./Mutations";
import queries from './Queries'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: queries,
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: mutations,
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});