import { GraphQLID } from "graphql";
import { MessageType } from "../../TypeDefs";

import { isAuthenticated } from "../../../helpers/auth";
import { deleteUserById } from "../../../helpers/users";

const deleteUser = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, { id }: any, { authToken }: any) {

        isAuthenticated(authToken);

        await deleteUserById(id);        

        return { success: true, message: "User deleted successfully" };
    },
};

export default deleteUser;