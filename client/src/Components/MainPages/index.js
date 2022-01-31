import React from 'react';
import AppMain from '../Layout/AppMain';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';

const Main = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<AppMain />} />
            </Routes>
        </>
    );
};

export default Main;
