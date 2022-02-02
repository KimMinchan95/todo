import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { sidebarData } from './Componetns/sidebarData';

const SidebarContainer = styled.nav`
    position: fixed;
    width: 200px;
    height: 100%;
    padding-top: 50px;
    background-color: #f2f2f7;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const NavMenuContainer = styled.ul``;

const NavMenu = styled.li`
    border-radius: 5px;
    :hover {
        background-color: #dbdbdb;
    }
    .active {
        background-color: #dbdbdb;
    }
`;

const CustomLink = styled(NavLink)`
    display: flex;
    padding-top: 7px;
    margin-top: 3px;
    border-radius: 5px;
    :first-child {
        margin-top: 8px;
    }
`;

const MenuContent = styled.div`
    font-size: 20px;
    font-family: 'Do Hyeon', sans-serif;
`;

const IconStyle = styled.span`
    height: 25px;
    width: 25px;
    padding: 1px;
    margin-left: 13px;
`;

const AppSidebar = () => {
    return (
        <SidebarContainer>
            <NavMenuContainer>
                {sidebarData.map((data, index) => {
                    return (
                        <NavMenu key={data.title + index}>
                            <CustomLink to={data.path}>
                                <IconStyle>{data.icon}</IconStyle>
                                <MenuContent>{data.title}</MenuContent>
                            </CustomLink>
                        </NavMenu>
                    );
                })}
            </NavMenuContainer>
        </SidebarContainer>
    );
};

export default AppSidebar;
