import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componets/shared/Navbar';
import Footer from '../componets/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
     {/* react toastify */}
            <ToastContainer />
        </div>
    );
};

export default RootLayout;