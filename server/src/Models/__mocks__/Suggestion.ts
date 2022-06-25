import { suggestions } from "./testData";

export const findAll = () => {
    return suggestions.rows;
};

const mockSuggestion = {
    findAll,
};

export default mockSuggestion;