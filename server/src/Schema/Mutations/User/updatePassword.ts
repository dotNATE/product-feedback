import { GraphQLString } from "graphql";
import { User } from "../../../Models";
import { MessageType } from "../../TypeDefs";

const bcrypt = require('bcrypt');

export const updatePassword = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(_: any, args: any) {
        const { username, oldPassword, newPassword } = args;
        const { BCRYPT_ROUNDS } = process.env;

        if (oldPassword === newPassword) {
            throw new Error("Your new password must be different from your old password")
        }

        const user = await User.findOne({
            where: {
                username,
            },
        });

        if (!user) {
            throw new Error("User doesn't exist");
        }
        
        const isPasswordValid: boolean = await bcrypt.compare(oldPassword, user.password);

        if (!isPasswordValid) {
            throw new Error("Passwords do not match");
        }

        const newPasswordHash: string = await bcrypt.hash(newPassword, Number(BCRYPT_ROUNDS))

        await User.update({ password: newPasswordHash }, {
            where: {
                username,
            },
        });

        return { success: true, message: "Password updated successfully" };
    },
};

export default updatePassword;