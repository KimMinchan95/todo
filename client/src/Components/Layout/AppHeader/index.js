import React from 'react';
import styled from 'styled-components';
import AppLogo from '../../Common/Logo';

const HeaderContainer = styled.header`
    position: fixed;
    height: 45px;
    width: 100%;
    background-color: rgb(250, 250, 252);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 0 20px;
`;

const AppHeader = () => {
    return (
        <HeaderContainer>
            <AppLogo />
        </HeaderContainer>
    );
};

export default AppHeader;
