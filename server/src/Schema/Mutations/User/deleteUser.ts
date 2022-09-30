import { GraphQLID } from 'graphql';
import { MessageType } from '../../TypeDefs';

import { resolveDeleteUser } from '../../../resolvers/user';

const deleteUser = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: resolveDeleteUser,
};

export default deleteUser;
