import { GraphQLString } from "graphql";
import User from "../../Models/User";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(_: any, args: any) {
        const { name, username, password } = args;

        const newUser = User.create({ name, username, password });

        return newUser;
    },
};