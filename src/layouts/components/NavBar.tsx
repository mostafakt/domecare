import { IconButton } from '@mui/material';
import React from 'react';

const NavBar = () => {
  return (
    <div className=" sticky px-[50px] py-[12px] flex justify-between items-center flex-row-reverse ">
      {/* buttons */}
      <div className="flex gap-2">
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
            src="/icons/process/ic_user.svg"
            className="w-[20px] h-[20px]"
            alt=""
          />
        </IconButton>
      </div>
      {/* log */}
      <div className="">
        <img src="/logo.svg" className="h-[40px]" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
