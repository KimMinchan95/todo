export interface StyledBackGroundColorContainer {
    backgroundColor: string;
}

export interface StyledSingleTodo {
    done: boolean;
}

export interface SingleTodoInterface {
    id: number;
    content: string;
    now: number;
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
