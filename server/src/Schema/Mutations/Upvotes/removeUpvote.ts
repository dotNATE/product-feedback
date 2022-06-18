import { GraphQLID } from "graphql";
import { Upvote, Suggestion } from "../../../Models";
import { MessageType } from "../../TypeDefs";
import { Op } from 'sequelize';
import jwt from 'jsonwebtoken';

const removeUpvote = {
    type: MessageType,
    args: {
        userId: { type: GraphQLID},
        suggestionId: { type: GraphQLID},
    },
    async resolve(_: any, args: any, context: any) {
        console.log('removeUpvote invoked with: ', args);
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

        if (!upvote) {
            throw new Error("Upvote does not exist!")
        }

        await upvote.destroy();

        const upvoteCount = await Upvote.count({
            where: {
                suggestionId,
            },
        });

        await Suggestion.update({ upvotes: upvoteCount }, {
            where: {
                id: suggestionId,
            },
        });

        return { success: true, message: 'Upvote removed successfully' };
    },
};

export default removeUpvote;