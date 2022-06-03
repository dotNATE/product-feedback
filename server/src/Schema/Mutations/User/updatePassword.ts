import { GraphQLString } from "graphql";
import { User } from "../../../Models";
import { MessageType } from "../../TypeDefs";

export const updatePassword = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(_: any, args: any) {
        const { username, oldPassword, newPassword } = args;

        const user = await User.findOne({
            where: {
                username,
            },
        });

        if (!user) {
            throw new Error("User doesn't exist");
        }
        
        const userPassword = user?.password;

        if (!(oldPassword === userPassword)) {
            throw new Error("Passwords do not match");
        }

        await User.update({ password: newPassword }, {
            where: {
                username,
            },
        });

        return { success: true, message: "Password updated successfully" };
    },
};

export default updatePassword;