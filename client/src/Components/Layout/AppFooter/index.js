import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: table;
    position: fixed;
    z-index: 10;
    bottom: 0;
    width: 100%;
    height: 25px;
    background-color: rgb(250, 250, 252);
`;

const FooterContent = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: right;
    padding: 0 10px;
    font-family: 'Yeon Sung', cursive;
`;

const AppFooter = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <a href="https://github.com/KimMinchan95" target="_blank">
                    Made by KimMinchan95
                </a>
            </FooterContent>
        </FooterContainer>
    );
};

export default AppFooter;
