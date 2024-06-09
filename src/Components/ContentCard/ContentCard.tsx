import { IconButton } from '@mui/material';
import React, { useRef, useState } from 'react';
interface IContentCard {
  title: string;
  children?: JSX.Element;
  className?: string;
  expand?: boolean;
}
const ContentCard = ({ title, className, children, expand }: IContentCard) => {
  const [height, setHeight] = useState(500);
  const refIco = useRef<HTMLDivElement>(null);

  const handleExpandClick = () => {
    if (refIco.current) {
      refIco.current.style.height = `${height + 200}px`;
      setHeight(height + 200);
    }
  };
  return (
    <div
      ref={refIco}
      className={` relative w-full bg-white  rounded-2xl h-[500px] p-[16px] ${className ? className : ''} `}
    >
      <div className=" font-extrabold w-fit">
        {title}{' '}
        <div className=" bg-primary h-[4px] rounded-2xl w-[30px] "></div>
      </div>
      {children}

      {expand && (
        <div className="w-full absolute flex justify-center  bottom-[0px]  backdrop-blur-[1px]   left-0">
          <IconButton onClick={handleExpandClick}>
            <img src="/icons/process/service4.svg" alt="" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
