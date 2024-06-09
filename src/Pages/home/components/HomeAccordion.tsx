import React from 'react';
import CustomizedAccordions from '../../../Components/Accordion/Accordion';
import { LinkSvg, EditSvg } from './SvgIcons';

const HomeAccordion = () => {
  return (
    <CustomizedAccordions
      title="Lorem Ipsum"
      content={
        <div className="  bg-background-components-collapse_content  ">
          {/* level 2 subTask */}
          <div className="w-full flex items-center justify-between border-l-[3px] pl-[5px] pr-[12px] border-background-components-collapse_content_border">
            <div> Lorem Ipsum dolor sit amit </div>
            <div className="flex   items-center  ">
              <LinkSvg style="p-[5px] cursor-pointer" />

              <EditSvg style="p-[5px] cursor-pointer" />
            </div>
          </div>
          {/* subtask level 3 */}
          <div className="flex flex-col gap-1 pl-[8px] pr-[12px] pb-[20px]">
            <div className="pl-[16px] bg-background-heighLight ">
              Lorem Ipsum dolor sit amit
            </div>{' '}
            <div className="pl-[16px] bg-background-heighLight ">
              Lorem Ipsum dolor sit amit
            </div>
          </div>
        </div>
      }
    />
  );
};

export default HomeAccordion;
