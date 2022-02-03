import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TodayPageContainer = styled.div`
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: calc(100vh - 75px);
    width: 100%;
`;

const TodayPage = () => {
    const { backgroundColor } = useSelector(state => state.AppColor);
    return <TodayPageContainer backgroundColor={backgroundColor}></TodayPageContainer>;
};

export default TodayPage;
