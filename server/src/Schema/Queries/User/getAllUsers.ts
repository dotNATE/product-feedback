import { GraphQLList } from "graphql"

import { getAllUsers as getAllUsersHelper } from '../../../helpers/users'
import { UserType } from "../../TypeDefs"

const getAllUsers = {
    type: new GraphQLList(UserType),
    async resolve() {
        return await getAllUsersHelper();
    },
};

export default getAllUsers;