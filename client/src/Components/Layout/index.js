import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import MainPage from '../MainPages/MainPage';

const AppMain = () => {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
            <AppFooter />
        </>
    );
};

export default AppMain;
