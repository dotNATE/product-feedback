import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './auth';
import feedbackReducer from './feedback';
  
export const store = configureStore({
    reducer: {
        auth: authReducer,
        feedback: feedbackReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;