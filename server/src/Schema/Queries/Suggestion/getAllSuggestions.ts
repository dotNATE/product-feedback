import { GraphQLList } from 'graphql';
import { SuggestionType } from '../../TypeDefs';

import { resolveGetAllSuggestions } from '../../../resolvers/suggestion';

const getAllSuggestions = {
  type: new GraphQLList(SuggestionType),
  resolve: resolveGetAllSuggestions,
};

export default getAllSuggestions;
