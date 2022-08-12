import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import MainPage from '../MainPages/MainPage';
import TodoPage from '../MainPages/Todaypage';

const AppMain = () => {
    return (
        <>
            <>
                <AppHeader />
                <AppSidebar />
                <div id="content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/today" element={<TodoPage />} />
                    </Routes>
                </div>
                <AppFooter />
            </>
        </>
    );
};

export default AppMain;
