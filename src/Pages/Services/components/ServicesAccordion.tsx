import React from 'react';
import CustomizedAccordions from '../../../Components/Accordion/Accordion';
import { IconButton } from '@mui/material';

const ServicesAccordion = () => {
  return (
    <CustomizedAccordions
      title="Lorem Ipsum"
      content={
        <div className="  bg-background-components-collapse_content  ">
          {/* level 2 subTask */}
          <div className="w-full flex items-center    pl-[5px] pr-[12px] border-background-components-collapse_content_border">
            <IconButton>
              <img src="/icons/process/Rectangle 17623.svg" alt="" />
            </IconButton>
            <div> Lorem Ipsum dolor sit amit </div>
            <div className="flex   items-center  "></div>
          </div>
          {/* subtask level 3 */}
          <div className="flex flex-col gap-1 pl-[8px] pr-[12px] pb-[20px]">
            <div className="pl-[16px] bg-background-heighLight ">
              <IconButton>
                <img src="/icons/process/Rectangle 17623.svg" alt="" />
              </IconButton>{' '}
              Lorem Ipsum dolor sit amit
            </div>{' '}
            <div className="pl-[16px] bg-background-heighLight ">
              <IconButton>
                <img src="/icons/process/Rectangle 17623.svg" alt="" />
              </IconButton>{' '}
              Lorem Ipsum dolor sit amit
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ServicesAccordion;
