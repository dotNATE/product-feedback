import { GraphQLID } from 'graphql';
import { MessageType } from '../../TypeDefs';

import { resolveAddUpvote } from '../../../resolvers/upvote';

const addUpvote = {
  type: MessageType,
  args: {
    userId: { type: GraphQLID },
    suggestionId: { type: GraphQLID },
  },
  resolve: resolveAddUpvote,
};

export default addUpvote;
