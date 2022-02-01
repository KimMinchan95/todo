import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    height: 30px;
    margin-top: 5px;
`;

const AppLogo = () => {
    return (
        <>
            <Logo src={process.env.PUBLIC_URL + '/img/logo.png'} />
        </>
    );
};

export default AppLogo;
