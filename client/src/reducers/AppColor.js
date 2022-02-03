import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    backgroundColor: '#B0A8B9',
};

const AppColor = createSlice({
    name: 'appColor',
    initialState,
    reducers: {
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
    },
});

export const { setBackgroundColor } = AppColor.actions;
export default AppColor.reducer;
