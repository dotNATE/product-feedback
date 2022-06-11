import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/index';

import type { SuggestionType } from '../views/Home/components/SuggestionList/Suggestion';

export type SuggestionState = {
    suggestions: SuggestionType[],
    suggestionFilter: string,
    createSuggestionOpen: boolean;
};

const initialState: SuggestionState = {
    suggestions: [],
    suggestionFilter: 'all',
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
    },
});

export const { addSuggestionsToState, setSuggestionFilter, openCreateSuggestion, closeCreateSuggestion } = suggestionSlice.actions;   
export const selectSuggestions = (state: RootState) => state.suggestion.suggestions;
export const selectSuggestionFilter = (state: RootState) => state.suggestion.suggestionFilter;
export const selectCreateSuggestion = (state: RootState) => state.suggestion.createSuggestionOpen;
export default suggestionSlice.reducer;