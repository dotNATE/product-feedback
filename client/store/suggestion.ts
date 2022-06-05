import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/index';

export type SuggestionState = {
    suggestions: string[],
    createSuggestionOpen: boolean;
};

const initialState: SuggestionState = {
    suggestions: [],
    createSuggestionOpen: false,
};

export const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState,
    reducers: {
        addSuggestionsToState: (state, { payload }) => {
            state.suggestions = payload.suggestions;
        },
        openCreateSuggestion: (state) => {
            state.createSuggestionOpen = true;
        },
        closeCreateSuggestion: (state) => {
            state.createSuggestionOpen = false;
        },
    },
});

export const { addSuggestionsToState, openCreateSuggestion, closeCreateSuggestion } = suggestionSlice.actions;   
export const selectSuggestion = (state: RootState) => state.suggestion.suggestions;
export const selectCreateSuggestion = (state: RootState) => state.suggestion.createSuggestionOpen;
export default suggestionSlice.reducer;