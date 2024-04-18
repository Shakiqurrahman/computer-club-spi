import React from 'react';
import DNavbar from '../components/dashboard-comp/DNavbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Sidebar from '../components/dashboard-comp/Sidebar';

const DLayout = () => {
    return (
        <>
        <DNavbar />
      <div className="max-width">
        <Outlet />
      </div>
      <ScrollRestoration />
      {/* <Footer /> */}
    </>
    );
};

export default DLayout;