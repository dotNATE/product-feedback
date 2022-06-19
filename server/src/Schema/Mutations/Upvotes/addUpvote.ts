import { GraphQLID } from "graphql";

import { isAuthenticated } from '../../../helpers/auth';
import { refreshUpvoteCount, getOneUpvote, createNewUpvote } from '../../../helpers/upvotes';
import { MessageType } from "../../TypeDefs";

const addUpvote = {
    type: MessageType,
    args: {
        userId: { type: GraphQLID},
        suggestionId: { type: GraphQLID},
    },
    async resolve(_: any, { userId, suggestionId }: any, { authToken }: any) {
        isAuthenticated(authToken);
    
        const upvote = await getOneUpvote(userId, suggestionId);
        if (upvote) throw new Error("Upvote already exists");
    
        await createNewUpvote(userId, suggestionId);

        refreshUpvoteCount(suggestionId);
    
        return { success: true, message: 'Upvote successful' };
    },
};

export default addUpvote;