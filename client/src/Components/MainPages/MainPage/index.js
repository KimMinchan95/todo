import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setAddToTotal } from '../../../reducers/Todo';
import { Input } from 'reactstrap';

const MainPageContainer = styled.div`
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: calc(100vh - 75px);
    width: 100%;
`;

const TodoContainer = styled.main`
    width: 100%;
    height: 100%;
    padding: 20px;
    color: white;
`;

const TitleContainer = styled.div`
    display: table;
    height: 40px;
    width: 100%;
`;

const Title = styled.div`
    display: table-cell;
    vertical-align: middle;
    font-size: 30px;
`;

const TodoArea = styled.main`
    height: calc(100% - 90px);
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
            dispatch(setAddToTotal(e.target.value));
            setInputValue('');
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
                <TodoArea>
                    {totalTodo.map(({ id, content }) => (
                        <div key={id}>{content}</div>
                    ))}
                </TodoArea>
                <StyledInput type="text" value={inputValue} onChange={handleInputValue} onKeyUp={handleInputValue} />
            </TodoContainer>
        </MainPageContainer>
    );
};

export default MainPage;
