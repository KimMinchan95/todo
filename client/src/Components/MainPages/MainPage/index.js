import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

const Title = styled.div`
    height: 30px;
`;

const MainPage = () => {
    const { backgroundColor } = useSelector(state => state.AppColor);
    return (
        <MainPageContainer backgroundColor={backgroundColor}>
            <TodoContainer>
                <Title>전체일정</Title>
            </TodoContainer>
        </MainPageContainer>
    );
};

export default MainPage;
