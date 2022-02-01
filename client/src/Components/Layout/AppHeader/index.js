import React from 'react';
import styled from 'styled-components';
import AppLogo from '../../Common/Logo';
import AppProfile from './Componetns/AppProfile';

const HeaderContainer = styled.header`
    display: flex;
    position: fixed;
    z-index: 10;
    height: 50px;
    width: 100%;
    background-color: rgb(250, 250, 252);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 0 35px;
    justify-content: space-between;
`;

const AppHeader = () => {
    return (
        <HeaderContainer>
            <AppLogo />
            <AppProfile />
        </HeaderContainer>
    );
};

export default AppHeader;
