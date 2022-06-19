import { GraphQLString } from "graphql";
import { AuthTokenType } from "../../TypeDefs";

import { getUserByEmail } from "../../../helpers/users";
import { checkPassword, generateAccessToken } from "../../../helpers/auth";

const loginWithEmail = {
    type: AuthTokenType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve (_: any, { email, password }: any) {

        const user = await getUserByEmail(email);
        if (!user) throw new Error("No account found for that email");

        const isPasswordValid: boolean = await checkPassword(password, user.password);
        if (!isPasswordValid) throw new Error("Incorrect password");

        const accessToken: string = generateAccessToken(user.id);

        return { token: accessToken, id: user.id };
    },
};

export default loginWithEmail;