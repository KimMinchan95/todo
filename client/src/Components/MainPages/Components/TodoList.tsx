import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { SingleTodoInterface, StyledSingleTodo, TodoListProps } from '../../../interfaces';
import { ChangeEvent, FC } from 'react';
import { Button } from 'reactstrap';
import { setDeleteTodo, setDoneTodo } from '../../../reducers/Todo';

const TodoArea = styled.main`
    height: calc(100% - 135px);
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
`;

const TitleContainer = styled.div`
    display: table;
    height: 40px;
    width: 100%;
`;

const Title = styled.h1`
    display: table-cell;
    vertical-align: middle;
    font-size: 30px;
`;

const TotalCount = styled.div`
    font-size: 15px;
    padding-bottom: 5px;
`;

const SingleTodo = styled.div<StyledSingleTodo>`
    border: 1px solid black;
    margin: 0.5rem 0;
    padding: 0.2rem 0;
    cursor: default;
    ${({ done }) =>
        done &&
        css`
            text-decoration: line-through;
            color: #c2c2c2;
        `}
`;

const StyledButton = styled(Button)`
    padding: 0 6px !important;
    margin: 0 2px;
`;

const TodoList: FC<TodoListProps> = ({ title, totalTodo }) => {
    const dispatch = useDispatch();

    const lastLength = totalTodo.reduce<number>((acc: number, cur: SingleTodoInterface) => {
        if (!cur.done) {
            acc++;
        }
        return acc;
    }, 0);

    const handleClickDone = (id: string) => {
        dispatch(setDoneTodo(id));
    };

    const handleDeleteTodo = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        dispatch(setDeleteTodo(id));
    };

    return (
        <>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <TotalCount>일정 숫자 : {totalTodo.length}</TotalCount>
            <TotalCount>남은 일정 : {lastLength}</TotalCount>
            <TodoArea>
                <PerfectScrollbar>
                    {totalTodo.map(({ id, content, done }: SingleTodoInterface) => {
                        return (
                            <SingleTodo key={id} done={done} onClick={() => handleClickDone(id)}>
                                <StyledButton onClick={(e: ChangeEvent<HTMLInputElement>) => handleDeleteTodo(id, e)}>
                                    X
                                </StyledButton>
                                {content}
                            </SingleTodo>
                        );
                    })}
                </PerfectScrollbar>
            </TodoArea>
        </>
    );
};

export default TodoList;
