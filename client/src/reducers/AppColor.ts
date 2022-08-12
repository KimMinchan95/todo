import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    backgroundColor: '#B0A8B9',
};

const { actions, reducer } = createSlice({
    name: 'appColor',
    initialState,
    reducers: {
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
    },
});

export const { setBackgroundColor } = actions;
export default reducer;
