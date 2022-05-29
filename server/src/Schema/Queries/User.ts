import { GraphQLList } from "graphql"
import User from "../../Models/User";
import { UserType } from "../TypeDefs/User"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        const users = User.findAll();

        return users;
    },
};