import { Drawer, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SideBar from './SideBar';
import { ISidebar } from '../config';
interface INavbar {
  sideBar: ISidebar[];
  handleSelect: (i: number) => void;
}
const NavBar = ({ handleSelect, sideBar }: INavbar) => {
  const [drawer, setDrawer] = useState<'left' | 'right'>();

  return (
    <div className=" sticky px-[50px] py-[12px] flex justify-between items-center flex-row-reverse ">
      {/* buttons */}
      <div className="flex gap-2  mobile:hidden">
        <IconButton className="bg-white">
          <img
            src="/icons/process/chat.svg"
            className="w-[20px] h-[20px]"
            alt=""
          />
        </IconButton>
        <IconButton className="bg-white">
          <img
            src="/icons/process/bell.png"
            className="w-[20px] h-[20px]"
            alt=""
          />
        </IconButton>
        <IconButton className="bg-white">
          <img
            src="/icons/process/service1.svg"
            className="w-[20px] h-[20px]"
            alt=""
          />
        </IconButton>
      </div>
      <div className="hidden mobile:flex gap-2">
        <IconButton onClick={() => setDrawer('right')} className="bg-white">
          <img
            src="/icons/process/sideBarSmButton.png"
            className="w-[20px] h-[20px] rounded-[100px]"
            alt=""
          />
        </IconButton>
      </div>
      {/* log */}
      <div className="">
        <img src="/logo.svg" className="h-[40px]" alt="" />
      </div>
      <Drawer
        anchor={drawer === 'left' ? 'left' : 'right'}
        open={drawer ? true : false}
        onClose={() => setDrawer(undefined)}
        className=" w-[320px]"
      >
        {' '}
        <div
          style={{ padding: '20px' }}
          className={`  grid grid-cols-1  w-[320px]  px-[20px] justify-between    `}
        >
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
                        style={{ display: 'flex', alignItems: 'center' }}
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
      </Drawer>
    </div>
  );
};

export default NavBar;
