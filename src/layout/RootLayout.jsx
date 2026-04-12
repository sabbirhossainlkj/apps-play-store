import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componets/shared/Navbar';
import Footer from '../componets/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;