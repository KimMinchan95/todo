import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.nav`
    position: fixed;
    width: 200px;
    height: 100%;
    padding-top: 50px;
    background-color: #f2f2f7;
`;

const NavMenu = styled.div`
    font-size: 20px;
    font-family: 'Do Hyeon', sans-serif;
`;

const AppSidebar = () => {
    return (
        <SidebarContainer>
            <NavMenu>
                <Link to="/">Main</Link>
            </NavMenu>
            <NavMenu>
                <Link to="/todo">Todo</Link>
            </NavMenu>
        </SidebarContainer>
    );
};

export default AppSidebar;
