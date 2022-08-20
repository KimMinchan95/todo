import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { SingleTodoInterface } from '../interfaces';

const initialState = {
    total: [] as SingleTodoInterface[],
};

const { actions, reducer } = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setAddToTotal: {
            reducer: (state, action: PayloadAction<SingleTodoInterface>) => {
                state.total.unshift(action.payload);
            },
            prepare: (content: string) => {
                const id = nanoid();
                const time = moment().format('YYYYMMDD');
                const done = false;
                return { payload: { id, content, time, done } };
            },
        },
        setDoneTodo: (state, action: PayloadAction<string>) => {
            state.total = state.total.map<SingleTodoInterface>((todo: SingleTodoInterface) => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done };
                } else {
                    return todo;
                }
            });
        },
        setDeleteTodo: (state, action) => {
            state.total = state.total.filter((todo: SingleTodoInterface) => todo.id !== action.payload);
        },
    },
});

export const { setAddToTotal, setDoneTodo, setDeleteTodo } = actions;
export default reducer;
