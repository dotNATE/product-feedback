import { GraphQLString } from "graphql";
import { User } from "../../../Models";
import { UserType } from "../../TypeDefs";

const bcrpyt = require('bcrypt');

const createUser = {
    type: UserType,
    args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(_: any, args: any) {
        const { firstName, lastName, email, username, password } = args;

        const userEmailCheck = await User.findOne({
            where: {
                email,
            },
        });

        if (userEmailCheck) {
            throw new Error("This email address is already in use");
        }

        const usernameCheck = await User.findOne({
            where: {
                username,
            },
        });

        if (usernameCheck) {
            throw new Error("This username is already in use");
        }

        const passwordHash: string = await bcrpyt.hash(password, 10);
        const newUser = await User.create({ firstName, lastName, email, username, password: passwordHash });

        return newUser;
    },
};

export default createUser;