import { GraphQLList } from "graphql"
import { UserType } from "../../TypeDefs"

import { resolveGetAllUsers } from "../../../resolvers/user";

const getAllUsers = {
    type: new GraphQLList(UserType),
    resolve: resolveGetAllUsers,
};

export default getAllUsers;