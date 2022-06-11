import { GraphQLID, GraphQLString } from "graphql";
import { Upvote } from "../../../Models";
import { MessageType } from "../../TypeDefs";
import jwt from 'jsonwebtoken';

const addUpvote = {
    type: MessageType,
    args: {
        userId: { type: GraphQLString},
        suggestionId: { type: GraphQLID},
    },
    async resolve(_: any, args: any, context: any) {
        console.log('addUpvote invoked with: ', args);
        const { userId, suggestionId } = args;
        const { authToken } = context;
        const { ACCESS_TOKEN_SECRET } = process.env;

        jwt.verify(authToken, String(ACCESS_TOKEN_SECRET), (error: any) => {
            if (error) throw new Error("Unauthorised");
        });

        await Upvote.create({
            userId,
            suggestionId
        });

        return { success: true, message: 'Upvote successful' };
    },
};

export default addUpvote;