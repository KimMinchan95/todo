export interface StyledBackGroundColorContainer {
    backgroundColor: string;
}

export interface StyledSingleTodo {
    done: boolean;
}

export interface SingleTodoInterface {
    id: number;
    content: string;
    time: string;
    done: boolean;
}

export interface RootState {
    AppColor: {
        backgroundColor: string;
    };
    Todo: {
        total: [];
    };
}

export interface TodoListProps {
    title: string;
    totalTodo: SingleTodoInterface[];
}
