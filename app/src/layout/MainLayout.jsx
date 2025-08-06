import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
