import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setAddToTotal } from '../../../reducers/Todo';
import { Input } from 'reactstrap';
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
    height: calc(100% - 110px);
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
`;

const StyledInput = styled(Input)`
    height: 40px;
    width: 100%;
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

    return (
        <MainPageContainer backgroundColor={backgroundColor}>
            <TodoContainer>
                <TitleContainer>
                    <Title>전체 일정</Title>
                </TitleContainer>
                <TotalCount>일정 숫자 : {totalTodo.length}</TotalCount>
                <TodoArea>
                    <PerfectScrollbar>
                        {totalTodo.map(({ id, content }) => (
                            <div key={id}>{content}</div>
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
