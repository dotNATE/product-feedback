import { GraphQLString } from "graphql";
import { UserType } from "../../TypeDefs";

import { resolveCreateUser } from "../../../resolvers/user";

const createUser = {
    type: UserType,
    args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: resolveCreateUser,
};

export default createUser;