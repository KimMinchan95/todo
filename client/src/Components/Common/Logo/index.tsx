import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    height: 25px;
    margin: 12.5px 0;
`;

const AppLogo = () => {
    return (
        <>
            <Logo src={process.env.PUBLIC_URL + '/img/logo.png'} />
        </>
    );
};

export default AppLogo;
