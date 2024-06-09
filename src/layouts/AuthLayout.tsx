import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { IconButton } from '@mui/material';
import { SideBarPages } from './config';

const AuthLayout = () => {
  const [sideBar, setSideBar] = useState(SideBarPages);
  const location = useLocation();
  const navigate = useNavigate();

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
      <NavBar />
      <div className="grid mobile:grid-cols-1 grid-cols-[320px_1fr] gap-x-12 px-[20px] justify-between">
        {/* sidebar */}
        <div>
          <div className="bg-white w-[300px] rounded-lg py-[20px] pl-[20px] flex flex-col  ">
            {/* profile */}
            <div className="flex  items-center justify-between pr-[20px]">
              <div className="flex items-center ">
                <IconButton className="bg-white">
                  <img
                    src="/icons/process/profile-image.png"
                    className="w-[40px] h-[40px] rounded-[100px]"
                    alt=""
                  />
                </IconButton>
                <div className="font-extrabold ">User Name</div>
              </div>
              <IconButton className="bg-white">
                <img
                  src="/icons/process/chart.svg"
                  className="w-[40px] h-[40px] rounded-[100px]"
                  alt=""
                />
              </IconButton>
            </div>
            {/* list */}
            <div className="flex flex-col gap-2">
              {sideBar.map((i, index) => (
                <>
                  <div
                    className={` ${i.selected ? 'bg-background-main' : ' bg-white '} `}
                  >
                    <div className="w-full h-2 bg-white rounded-br-3xl"></div>
                    <div className="bg-white">
                      <div
                        className={` rounded-l-[100px] flex items-center  ${i.selected ? 'bg-background-main' : 'bg-white'} cursor-pointer`}
                        onClick={() => {
                          handleSelect(index);
                        }}
                      >
                        <IconButton
                          className={` ${i.selected ? 'bg-background-main' : ' bg-white '} `}
                          size="small"
                        >
                          <img
                            src={i.icon}
                            className={`w-[40px] h-[40px] rounded-[100px] ${i.selected ? 'bg-background-main' : 'bg-white'} `}
                            alt=""
                          />
                        </IconButton>
                        <div
                          className={`font-extrabold ${i.selected ? 'text-text-primary' : ' '}`}
                        >
                          {i.name}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white rounded-tr-3xl"></div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* content */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
