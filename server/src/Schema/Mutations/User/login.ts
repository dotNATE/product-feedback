import { GraphQLString } from "graphql";
import User from "../../../Models/User";
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
        const { email, password } = args;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            throw new Error("No account found for that email");
        }

        const isPasswordValid: boolean = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Incorrect password");
        }

        const accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET || 'fallback';
        const accessToken: string = jwt.sign({ email: email }, accessTokenSecret, { expiresIn: '30m'});

        return { token: accessToken };
    },
};

export default loginWithEmail;