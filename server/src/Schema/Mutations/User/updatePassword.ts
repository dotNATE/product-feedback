import { GraphQLString } from "graphql";
import { MessageType } from "../../TypeDefs";

import { checkPassword, isAuthenticated } from "../../../helpers/auth";
import { getUserByUsername, updateUserPasswordByUsername } from "../../../helpers/users";

export const resolve = async (_: any, { username, oldPassword, newPassword }: any, { authToken }: any) => {
    isAuthenticated(authToken);

    if (oldPassword === newPassword) throw new Error("Your new password must be different from your old password");

    const user = await getUserByUsername(username);
    if (!user) throw new Error("User not found");
    
    const isPasswordValid: boolean = await checkPassword(oldPassword, user.password);
    if (!isPasswordValid) throw new Error("Passwords do not match");

    await updateUserPasswordByUsername(username, newPassword);

    return { success: true, message: "Password updated successfully" };
};

const updatePassword = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    resolve,
};

export default updatePassword;