import { GraphQLString } from "graphql";
import { User } from "../../../Models";
import { MessageType } from "../../TypeDefs";

const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken";

export const updatePassword = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(_: any, args: any, context: any) {
        console.log('updatePassword invoked with: ', args);
        const { username, oldPassword, newPassword } = args;
        const { BCRYPT_ROUNDS, ACCESS_TOKEN_SECRET } = process.env;
        const { authToken } = context;

        if (oldPassword === newPassword) {
            throw new Error("Your new password must be different from your old password");
        }

        const user = await User.findOne({
            where: {
                username,
            },
        });

        if (!user) throw new Error("User doesn't exist");

        jwt.verify(authToken, String(ACCESS_TOKEN_SECRET), (error: any) => {
            if (error) throw new Error(error);
        });
        
        const isPasswordValid: boolean = await bcrypt.compare(oldPassword, user.password);

        if (!isPasswordValid) throw new Error("Passwords do not match");

        const newPasswordHash: string = await bcrypt.hash(newPassword, Number(BCRYPT_ROUNDS));

        await User.update({ password: newPasswordHash }, {
            where: {
                username,
            },
        });

        return { success: true, message: "Password updated successfully" };
    },
};

export default updatePassword;