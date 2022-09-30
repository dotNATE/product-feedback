import { GraphQLID, GraphQLString } from 'graphql';
import { SuggestionType } from '../../TypeDefs';

import { resolveCreateSuggestion } from '../../../resolvers/suggestion';

const createSuggestion = {
  type: SuggestionType,
  args: {
    title: { type: GraphQLString },
    category: { type: GraphQLString },
    detail: { type: GraphQLString },
    createdBy: { type: GraphQLID },
  },
  resolve: resolveCreateSuggestion,
};

export default createSuggestion;
