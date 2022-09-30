jest.mock('./upvotes');

import { suggestions, users } from '../testData';

import {
  mapUpvoteCountToSuggestionsByUserId,
} from './suggestions';

describe('mapUpvoteCountToSuggestionsByUserId', () => {
  describe('success', () => {
    const userId = users[0].id;

    it('returns an array', async () => {
      const result = await mapUpvoteCountToSuggestionsByUserId(
        suggestions,
        userId
      );

      expect(Array.isArray(result)).toBe(true);
    });

    it('returns the same number of suggestions that it is given', async () => {
      const suggestionCount = suggestions.length;
  
      const result = await mapUpvoteCountToSuggestionsByUserId(
        suggestions,
        userId
      );

      expect(result.length).toEqual(suggestionCount);
    });
  })
});
