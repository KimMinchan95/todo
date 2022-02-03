import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MainPageContainer = styled.div`
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: calc(100vh - 75px);
    width: 100%;
`;

const MainPage = () => {
    const { backgroundColor } = useSelector(state => state.AppColor);
    return <MainPageContainer backgroundColor={backgroundColor}></MainPageContainer>;
};

export default MainPage;
