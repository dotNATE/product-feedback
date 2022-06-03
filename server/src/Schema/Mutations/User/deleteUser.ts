import { GraphQLID } from "graphql";
import { User } from "../../../Models";
import { MessageType } from "../../TypeDefs";

import jwt from 'jsonwebtoken';

const deleteUser = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, args: any, context: any) {
        const { id } = args;
        const { ACCESS_TOKEN_SECRET } = process.env;
        const { authToken } = context;

        jwt.verify(authToken, String(ACCESS_TOKEN_SECRET), (error: any, data: any) => {
            if (error) throw new Error(error);
            if (id !== data.userId) throw new Error("You do not have permission to delete this user");
        });
        
        await User.destroy({
            where: {
                id
            },
        });

        return { success: true, message: "User deleted successfully" };
    },
};

export default deleteUser;