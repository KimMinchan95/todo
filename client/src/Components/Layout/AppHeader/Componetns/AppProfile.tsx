import React from 'react';
import styled from 'styled-components';

const AppProfile = () => {
    return (
        <ProfileContainer>
            <ProfileIcon src={process.env.PUBLIC_URL + 'img/profile.png'} />
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div`
    display: inline-block;
`;

const ProfileIcon = styled.img`
    margin: 7.5px 0;
    height: 35px;
    cursor: pointer;
`;

export default AppProfile;
