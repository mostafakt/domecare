import { IconButton } from '@mui/material';
import React from 'react';
import { ISidebar } from '../config';
interface ISidebarComponent {
  sideBar: ISidebar[];
  handleSelect: (i: number) => void;
  isSidebar?: boolean;
}
const SideBar = ({ handleSelect, sideBar, isSidebar }: ISidebarComponent) => {
  return (
    <div
      className={`${isSidebar ? ' grid grid-cols-1  w-[320px]  px-[20px] justify-between ' : 'mobile:hidden'} `}
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
  );
};

export default SideBar;
