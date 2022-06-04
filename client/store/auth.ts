import { createSlice } from '@reduxjs/toolkit';
import { string } from 'yup';
import type { RootState } from '../store/index';

export type AuthState = {
    authenticated: boolean;
    token: string;
};

const initialState: AuthState = {
    authenticated: false,
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.authenticated = true;
            state.token = action.payload.token;
        },
    },
});

export const { login } = authSlice.actions;   
export const selectAuthenticated = (state: RootState) => state.auth.authenticated;
export const selectToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;