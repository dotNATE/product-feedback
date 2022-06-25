jest.mock('../Models/Suggestion');
import Suggestion from '../Models/Suggestion';

import { getAllSuggestions, createNewSuggestion } from './suggestions';

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