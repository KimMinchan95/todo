import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total: [],
};

const { actions, reducer } = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setAddToTotal: (state, action) => {
            state.total.unshift(action.payload);
        },
    },
});

export const { setAddToTotal } = actions;
export default reducer;
