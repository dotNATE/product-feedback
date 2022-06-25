import { GraphQLString } from "graphql";
import { MessageType } from "../../TypeDefs";

import { resolveLoginWithEmail } from "../../../resolvers/user";

const updatePassword = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    resolve: resolveLoginWithEmail,
};

export default updatePassword;