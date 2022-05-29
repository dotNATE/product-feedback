import { GraphQLList } from "graphql"
import User from "../../../Models/User";
import { UserType } from "../../TypeDefs"

const getAllUsers = {
    type: new GraphQLList(UserType),
    resolve() {
        const users = User.findAll();

        return users;
    },
};

export default getAllUsers;