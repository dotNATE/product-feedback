import { GraphQLID } from 'graphql';
import { MessageType } from '../../TypeDefs';

import { resolveRemoveUpvote } from '../../../resolvers/upvote';

const removeUpvote = {
  type: MessageType,
  args: {
    userId: { type: GraphQLID },
    suggestionId: { type: GraphQLID },
  },
  resolve: resolveRemoveUpvote,
};

export default removeUpvote;
