import { createSlice, nanoid } from '@reduxjs/toolkit';
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
                const done = false;
                return { payload: { id, content, now, done } };
            },
        },
        setDoneTodo: (state, action) => {
            state.total = state.total.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done };
                } else {
                    return todo;
                }
            });
        },
    },
});

export const { setAddToTotal, setDoneTodo } = actions;
export default reducer;
