/* eslint-disable no-undef */

import Sidebar from '../navigation/Sidenav';
import Header from '../navigation/Header';
import {  useState } from 'react';
import PropTypes from "prop-types";

const Layout = ({children}) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
   
    <div className="flex flex-col lg:flex-row h- overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1  ">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
      
          
        />
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full bg-gray-100 overflow-auto H-AUTO">{children}</div>
      </div>
    </div>
  );
};

export default Layout