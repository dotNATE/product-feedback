import { refreshUpvoteCount } from './upvotes';

import { suggestions } from '../testData';
import { Upvote, Suggestion } from '../Models'

describe("refreshUpvoteCount", () => {
    it("counts and updates the same suggestion", async () => {
        const suggestion = suggestions[0];
        const id = suggestion.id;
        const upvotes = suggestion.upvotes;
        
        const upvoteSpy = jest.spyOn(Upvote, 'count');
        const upvoteArgs = { where: { suggestionId: id } };

        const suggestionSpy = jest.spyOn(Suggestion, 'update');
        const suggestionArgs = [{ upvotes }, { where: { id } }];

        await refreshUpvoteCount(id);

        expect(upvoteSpy).toBeCalledWith(upvoteArgs);
        expect(suggestionSpy).toBeCalledWith(suggestionArgs[0], suggestionArgs[1]);
    });
});