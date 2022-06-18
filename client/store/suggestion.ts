import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/index';

import type { SuggestionType } from '../views/Home/components/SuggestionList/Suggestion';

export type SuggestionState = {
    suggestions: SuggestionType[],
    suggestionFilter: string,
    suggestionSort: (a: SuggestionType, b: SuggestionType) => number,
    createSuggestionOpen: boolean;
};

const initialState: SuggestionState = {
    suggestions: [],
    suggestionFilter: 'all',
    suggestionSort: (a: SuggestionType, b: SuggestionType) => b.upvotes - a.upvotes,
    createSuggestionOpen: false,
};

export const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState,
    reducers: {
        addSuggestionsToState: (state, { payload }) => {
            state.suggestions = payload.suggestions;
        },
        setSuggestionFilter: (state, { payload }) => {
            state.suggestionFilter = payload.suggestionFilter
        },
        openCreateSuggestion: (state) => {
            state.createSuggestionOpen = true;
        },
        closeCreateSuggestion: (state) => {
            state.createSuggestionOpen = false;
        },
        setSuggestionSort: (state, { payload }) => {
            state.suggestions.sort(payload);
        },
    },
});

export const { addSuggestionsToState, setSuggestionFilter, openCreateSuggestion, closeCreateSuggestion, setSuggestionSort } = suggestionSlice.actions;   
export const selectSuggestions = (state: RootState) => state.suggestion.suggestions;
export const selectSuggestionFilter = (state: RootState) => state.suggestion.suggestionFilter;
export const selectSuggestionSort = (state: RootState) => state.suggestion.suggestionSort;
export const selectCreateSuggestion = (state: RootState) => state.suggestion.createSuggestionOpen;
export default suggestionSlice.reducer;