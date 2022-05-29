import { GraphQLString } from "graphql";
import User from "../../../Models/User";
import { UserType } from "../../TypeDefs";

const createUser = {
    type: UserType,
    args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(_: any, args: any) {
        const { firstName, lastName, username, password } = args;

        const newUser = User.create({ firstName, lastName, username, password });

        return newUser;
    },
};

export default createUser;