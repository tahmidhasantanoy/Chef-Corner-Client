// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const MainLayout = () => {
    return (
        <>
        <Header/>
        <Outlet></Outlet>
        <Footer/>
        </>
    );
};

export default MainLayout;