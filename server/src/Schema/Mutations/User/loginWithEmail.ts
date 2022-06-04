import { GraphQLString } from "graphql";
import { User } from "../../../Models";
import { AuthTokenType } from "../../TypeDefs";

import jwt from 'jsonwebtoken';
const bcrypt = require('bcrypt');

const loginWithEmail = {
    type: AuthTokenType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve (_: any, args: any) {
        console.log('loginWithEmail invoked with: ', args);
        const { email, password } = args;
        const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY } = process.env;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) throw new Error("No account found for that email");

        const isPasswordValid: boolean = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) throw new Error("Incorrect password");

        const accessToken: string = jwt.sign({ userId: user.id }, String(ACCESS_TOKEN_SECRET), { expiresIn: String(ACCESS_TOKEN_EXPIRY)});

        return { token: accessToken };
    },
};

export default loginWithEmail;