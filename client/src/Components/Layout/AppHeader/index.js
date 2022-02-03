import React, { useState } from 'react';
import styled from 'styled-components';
import AppLogo from '../../Common/Logo';
import AppProfile from './Componetns/AppProfile';
import CustomModal from '../../Common/CustomModal';
import { CirclePicker } from 'react-color';
import { setBackgroundColor } from '../../../reducers/AppColor';
import { useDispatch } from 'react-redux';

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

const ColorPickerIcon = styled.img`
    margin: 7.5px 5px 7.5px 0;
    height: 35px;
    cursor: pointer;
`;

const colors = [
    '#B0A8B9',
    '#F3C5FF',
    '#f44336',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#936C00',
    '#ff9800',
    '#000000',
    '#795548',
    '#607d8b',
];

const AppHeader = () => {
    const dispatch = useDispatch();
    const [colorModal, setColorModal] = useState(false);

    const handleColorModal = () => {
        setColorModal(!colorModal);
    };

    const handleColorChange = color => dispatch(setBackgroundColor(color.hex));

    return (
        <>
            <HeaderContainer>
                <AppLogo />
                <div>
                    <ColorPickerIcon src={process.env.PUBLIC_URL + 'img/colorPicker.png'} onClick={handleColorModal} />
                    <AppProfile />
                </div>
            </HeaderContainer>
            <CustomModal
                initModal={colorModal}
                toggleModal={handleColorModal}
                title={'배경 선택'}
                body={
                    <CirclePicker width="445px" circleSize={56} onChangeComplete={handleColorChange} colors={colors} />
                }
                removeCancel
            />
        </>
    );
};

export default AppHeader;
