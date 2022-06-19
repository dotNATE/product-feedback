import { GraphQLString } from "graphql";
import { UserType } from "../../TypeDefs";

import { getUserByEmail, getUserByUsername } from "../../../helpers/users";
import { createNewUser } from "../../../helpers/users";

const createUser = {
    type: UserType,
    args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(_: any, { firstName, lastName, email, username, password }: any) {
        const userByEmail = await getUserByEmail(email);
        if (userByEmail) throw new Error("This email address is already in use");

        const userByUsername = await getUserByUsername(username);
        if (userByUsername) throw new Error("This username is already in use");

        return await createNewUser(firstName, lastName, email, username, password);
    },
};

export default createUser;