import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/index';

export type FeedbackState = {
    feedback: string[],
    createFeedbackOpen: boolean;
};

const initialState: FeedbackState = {
    feedback: [],
    createFeedbackOpen: false,
};

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        addFeedbackToState: (state, { payload }) => {
            state.feedback = payload.feedback;
        },
        openCreateFeedback: (state) => {
            state.createFeedbackOpen = true;
        },
        closeCreateFeedback: (state) => {
            state.createFeedbackOpen = false;
        },
    },
});

export const { addFeedbackToState, openCreateFeedback, closeCreateFeedback } = feedbackSlice.actions;   
export const selectFeedback = (state: RootState) => state.feedback.feedback;
export const selectCreateFeedback = (state: RootState) => state.feedback.createFeedbackOpen;
export default feedbackSlice.reducer;