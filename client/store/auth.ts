import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/index';

export type AuthState = {
    authenticated: boolean;
    token: string;
    id: string;
};

const initialState: AuthState = {
    authenticated: false,
    token: '',
    id: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.authenticated = true;
            state.token = payload.token;
            state.id = payload.id;
        },
    },
});

export const { login } = authSlice.actions;   
export const selectAuthenticated = (state: RootState) => state.auth.authenticated;
export const selectToken = (state: RootState) => state.auth.token;
export const selectId = (state: RootState) => state.auth.id;
export default authSlice.reducer;