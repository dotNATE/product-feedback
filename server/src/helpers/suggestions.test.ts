jest.mock('../Models/Suggestion');
import Suggestion from '../Models/Suggestion';

import { getAllSuggestions } from './suggestions';

describe("getAllSuggestions", () => {
    it("tries to find all suggestions in desc order of createdAt", async () => {
        const spy = jest.spyOn(Suggestion, 'findAll');
        const filterObject = {
            order: [['createdAt', 'DESC']],
        };

        await getAllSuggestions();

        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(filterObject)
    });
});