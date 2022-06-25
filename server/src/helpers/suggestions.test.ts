jest.mock('../Models/Suggestion');
jest.mock('./upvotes');

import Suggestion from '../Models/Suggestion';
import { suggestions, users } from '../testData';

import { getAllSuggestions, createNewSuggestion, mapUpvoteCountToSuggestionsByUserId } from './suggestions';

describe("createNewSuggestion", () => {
    const title = "title";
    const category = "category";
    const detail = "detail";
    const createdBy = "createdBy";

    it("tries to create a new suggestion", async () => {
        const spy = jest.spyOn(Suggestion, 'create');

        await createNewSuggestion(title, category, detail, createdBy);

        expect(spy).toBeCalledTimes(1);
    });
    it("calls create with the title, category, detail and createdBy from args and upvotes val of 0", async () => {
        const spy = jest.spyOn(Suggestion, 'create');

        await createNewSuggestion(title, category, detail, createdBy);

        expect(spy).toBeCalledWith({
            title,
            category,
            detail,
            createdBy,
            upvotes: 0,
        });
    });
    it("returns a suggestion made up of the args + an id", async () => {
        const suggestion = await createNewSuggestion(title, category, detail, createdBy);

        expect(suggestion.title).toEqual(title);
        expect(suggestion.category).toEqual(category);
        expect(suggestion.detail).toEqual(detail);
        expect(suggestion.createdBy).toEqual(createdBy);
        expect(suggestion.id).toBeDefined();
    });
});

describe("getAllSuggestions", () => {
    it("tries to find all suggestions in desc order of createdAt", async () => {
        const spy = jest.spyOn(Suggestion, 'findAll');
        const filterObject = {
            order: [['createdAt', 'DESC']],
        };

        await getAllSuggestions();

        expect(spy).toBeCalledWith(filterObject)
    });
});

describe("mapUpvoteCountToSuggestionsByUserId", () => {
    it("returns the same number of suggestions that it is given", async () => {
        const user = users[0];
        const suggestionCount = suggestions.length;

        const result = await mapUpvoteCountToSuggestionsByUserId(suggestions, user.id);

        expect(result.length).toEqual(suggestionCount);
    });
});