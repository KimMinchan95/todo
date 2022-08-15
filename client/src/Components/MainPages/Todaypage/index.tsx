import { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StyledBackGroundColorContainer, RootState, SingleTodoInterface } from '../../../interfaces';
import TodoList from '../Components/TodoList';
import moment from 'moment';

const TodayPageContainer = styled.div<StyledBackGroundColorContainer>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: calc(100vh - 75px);
    width: 100%;
`;

const TodoContainer = styled.main`
    width: 100%;
    height: 100%;
    padding: 10px;
    color: white;
`;

const TodayPage: FC = () => {
    const { backgroundColor } = useSelector((state: RootState) => state.AppColor);
    const { total: totalTodo } = useSelector((state: RootState) => state.Todo);

    console.log(totalTodo);

    const todayTodoList = totalTodo.filter((todo: SingleTodoInterface) => todo.time === moment().format('YYYYMMDD'));

    return (
        <TodayPageContainer backgroundColor={backgroundColor}>
            <TodoContainer>
                <TodoList title={'오늘 할일'} totalTodo={todayTodoList} />
            </TodoContainer>
        </TodayPageContainer>
    );
};

export default TodayPage;
