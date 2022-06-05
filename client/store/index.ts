import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './auth';
import suggestionReducer from './suggestion';
  
export const store = configureStore({
    reducer: {
        auth: authReducer,
        suggestion: suggestionReducer,
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