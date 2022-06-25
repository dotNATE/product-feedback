import { GraphQLString } from "graphql";
import { AuthTokenType } from "../../TypeDefs";

import { resolveLoginWithEmail } from "../../../resolvers/user";

const loginWithEmail = {
    type: AuthTokenType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: resolveLoginWithEmail,
};

export default loginWithEmail;