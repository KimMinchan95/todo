import React, { useState, ChangeEvent, FC } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setAddToTotal, setDoneTodo, setDeleteTodo } from '../../../reducers/Todo';
import { Input, Button } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { StyledSingleTodo, SingleTodoInterface, StyledBackGroundColorContainer, RootState } from '../../../interfaces';

const MainPageContainer = styled.div<StyledBackGroundColorContainer>`
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

const TodoArea = styled.main`
    height: calc(100% - 135px);
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
`;

const StyledInput = styled(Input)`
    height: 40px;
    width: 100%;
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

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { backgroundColor } = useSelector((state: RootState) => state.AppColor);
    const { total: totalTodo } = useSelector((state: RootState) => state.Todo);
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e: any) => {
        if ('key' in e && e.key === 'Enter') {
            if (e.target && e.target.value && inputValue !== '') {
                dispatch(setAddToTotal(e.target.value));
                setInputValue('');
            }
        } else {
            setInputValue(e.target.value);
        }
    };

    const handleClickDone = (id: number) => {
        dispatch(setDoneTodo(id));
    };

    const handleDeleteTodo = (id: number, e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        dispatch(setDeleteTodo(id));
    };

    // 남은 일정 수 count
    const lastLength = totalTodo.reduce<number>((acc: number, cur: SingleTodoInterface) => {
        if (!cur.done) {
            acc++;
        }
        return acc;
    }, 0);

    return (
        <MainPageContainer backgroundColor={backgroundColor}>
            <TodoContainer>
                <TitleContainer>
                    <Title>전체 일정</Title>
                </TitleContainer>
                <TotalCount>일정 숫자 : {totalTodo.length}</TotalCount>
                <TotalCount>남은 일정 : {lastLength}</TotalCount>
                <TodoArea>
                    <PerfectScrollbar>
                        {totalTodo.map(({ id, content, done, today }: SingleTodoInterface) => {
                            return (
                                <SingleTodo key={id} done={done} onClick={() => handleClickDone(id)}>
                                    <StyledButton
                                        onClick={(e: ChangeEvent<HTMLInputElement>) => handleDeleteTodo(id, e)}
                                    >
                                        X
                                    </StyledButton>
                                    {content}
                                </SingleTodo>
                            );
                        })}
                    </PerfectScrollbar>
                </TodoArea>
                <StyledInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputValue}
                    onKeyUp={handleInputValue}
                    maxLength="50"
                />
            </TodoContainer>
        </MainPageContainer>
    );
};

export default MainPage;
