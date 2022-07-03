import { setSuggestionSort } from './suggestion';

import { SuggestionType } from '../views/Home/components/SuggestionList/Suggestion';

export const leastUpvotes = setSuggestionSort({
    sort: (a: SuggestionType, b: SuggestionType) => a.upvotes - b.upvotes,
    label: "Least Upvotes",
});

export const mostUpvotes = setSuggestionSort({
    sort: (a: SuggestionType, b: SuggestionType) => b.upvotes - a.upvotes,
    label: "Most Upvotes",
});