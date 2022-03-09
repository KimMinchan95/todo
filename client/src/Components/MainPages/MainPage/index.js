import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setAddToTotal, setDoneTodo, setDeleteTodo } from '../../../reducers/Todo';
import { Input, Button } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const MainPageContainer = styled.div`
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

const SingleTodo = styled.div`
    border: 1px solid black;
    margin: 0.5rem 0;
    padding: 0.2rem 0;
    ${({ done }) =>
        done &&
        css`
            text-decoration: line-through;
            color: #c2c2c2;
        `}
`;

const MainPage = () => {
    const dispatch = useDispatch();
    const { backgroundColor } = useSelector(state => state.AppColor);
    const { total: totalTodo } = useSelector(state => state.Todo);
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = e => {
        if (e.key === 'Enter') {
            if (inputValue !== '') {
                dispatch(setAddToTotal(e.target.value));
                setInputValue('');
            }
        } else {
            setInputValue(e.target.value);
        }
    };

    const handleClickDone = id => {
        dispatch(setDoneTodo(id));
    };

    const handleDeleteTodo = (id, e) => {
        e.stopPropagation();
        dispatch(setDeleteTodo(id));
    };

    const lastLength = totalTodo.reduce((acc, cur) => {
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
                        {totalTodo.map(({ id, content, done, now }) => (
                            <SingleTodo key={id} done={done} onClick={() => handleClickDone(id)}>
                                <Button onClick={e => handleDeleteTodo(id, e)}>X</Button>
                                {content}
                            </SingleTodo>
                        ))}
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
