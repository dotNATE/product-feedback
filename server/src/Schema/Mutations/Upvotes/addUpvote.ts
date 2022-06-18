import { GraphQLID, GraphQLString } from "graphql";
import { Upvote, Suggestion } from "../../../Models";
import { MessageType } from "../../TypeDefs";
import { Op } from 'sequelize';
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

        const upvote = await Upvote.findOne({
            where: {
                [Op.and]: [
                    { userId },
                    { suggestionId }
                ],
            },
        });

        if (upvote) {
            throw new Error("Upvote already exists")
        }

        await Upvote.create({
            userId,
            suggestionId
        });

        const upvoteCount = await Upvote.count({
            where: {
                suggestionId,
            },
        });

        console.log("upvoteCount: ", upvoteCount);

        await Suggestion.update({ upvotes: upvoteCount }, {
            where: {
                id: suggestionId,
            },
        });

        return { success: true, message: 'Upvote successful' };
    },
};

export default addUpvote;