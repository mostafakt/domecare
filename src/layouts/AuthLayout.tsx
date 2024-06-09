import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { IconButton } from '@mui/material';
import { SideBarPages } from './config';
import SideBar from './components/SideBar';
import { ACCESS_TOKEN } from '../utils/constants';

const AuthLayout = () => {
  const [sideBar, setSideBar] = useState(SideBarPages);
  const location = useLocation();
  const navigate = useNavigate();
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const desiredPath = '/' + pathSegments[1];
    const stepSideBar = sideBar.map((s) => {
      if (s.link == desiredPath) {
        const selected = s;
        selected.selected = true;
        return selected;
      } else {
        const notSelected = s;
        notSelected.selected = false;
        return notSelected;
      }
    });
    setSideBar(stepSideBar);
  }, []);

  const handleSelect = (index: number) => {
    const stepSideBar = sideBar.map((s, i) => {
      if (i == index) {
        const selected = s;
        selected.selected = true;
        return selected;
      } else {
        const notSelected = s;
        notSelected.selected = false;
        return notSelected;
      }
    });
    setSideBar(stepSideBar);
    navigate(sideBar[index].link);
  };
  return (
    <div className="w-screen  h-screen bg-background-main !pb-[30px] overflow-auto ">
      <NavBar sideBar={sideBar} handleSelect={handleSelect} />
      <div className="grid mobile:grid-cols-1 grid-cols-[320px_1fr] gap-x-12 px-[20px] justify-between">
        {/* sidebar */}
        <SideBar sideBar={sideBar} handleSelect={handleSelect} />
        {/* content */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
