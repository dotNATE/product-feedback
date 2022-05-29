import { GraphQLString, GraphQLID } from "graphql";
import User from "../../Models/User";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_USER = {
    type: UserType,
    args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(_: any, args: any) {
        const { firstName, lastName, username, password } = args;

        const newUser = User.create({ firstName, lastName, username, password });

        return newUser;
    },
};

export const UPDATE_PASSWORD = {
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

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
        const { id } = args;
        
        await User.destroy({
            where: {
                id
            },
        });

        return { success: true, message: "User deleted successfully" };
    },
};