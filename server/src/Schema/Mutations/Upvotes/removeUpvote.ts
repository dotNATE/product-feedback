import { GraphQLID } from "graphql";
import { MessageType } from "../../TypeDefs";

import { isAuthenticated } from "../../../helpers/auth";
import { getOneUpvote, refreshUpvoteCount } from "../../../helpers/upvotes";

const removeUpvote = {
    type: MessageType,
    args: {
        userId: { type: GraphQLID},
        suggestionId: { type: GraphQLID},
    },
    async resolve(_: any, { userId, suggestionId }: any, { authToken }: any) {

        isAuthenticated(authToken);

        const upvote = await getOneUpvote(userId, suggestionId);

        if (!upvote) {
            throw new Error("Upvote does not exist!")
        }

        await upvote.destroy();

        await refreshUpvoteCount(suggestionId);

        return { success: true, message: 'Upvote removed successfully' };
    },
};

export default removeUpvote;