import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import moment from 'moment';

const initialState = {
    total: [],
};

const { actions, reducer } = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setAddToTotal: {
            reducer: (state, action) => {
                state.total.unshift(action.payload);
            },
            prepare: content => {
                const id = nanoid();
                const now = moment().unix();
                return { payload: { id, content, now } };
            },
        },
    },
});

export const { setAddToTotal } = actions;
export default reducer;
