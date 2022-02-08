import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
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
    const { backgroundColor } = useSelector(state => state.AppColor);
    return (
        <MainPageContainer backgroundColor={backgroundColor}>
            <TodoContainer>
                <TitleContainer>
                    <Title>전체 일정</Title>
                </TitleContainer>
                <TodoArea></TodoArea>
                <StyledInput />
            </TodoContainer>
        </MainPageContainer>
    );
};

export default MainPage;
