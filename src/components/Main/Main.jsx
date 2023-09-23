import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
      <div className="md:mx-24 bg-[#05445E]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
};

export default Main;