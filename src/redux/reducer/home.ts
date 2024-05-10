import { createSlice } from '@reduxjs/toolkit';
import Config from 'utils/Config';

export const initialState = {
    products: [],
    loading: false,
    offset: 0,
    totalRemaining: 0,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        updateLoadingHome: (state, action) => {
            return {
                ...state,
                loading: action.payload,
            };
        },
    },
});
export const { updateLoadingHome } = homeSlice.actions;

export const HomeReducer = homeSlice.reducer;
