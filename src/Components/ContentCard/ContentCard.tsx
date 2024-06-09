import { IconButton } from '@mui/material';
import React, { useRef, useState } from 'react';
import { SvgArrow } from '../Svg/ArrowSvg';
interface IContentCard {
  title: string;
  children?: JSX.Element;
  className?: string;
  expand?: boolean;
  fullHeight?: number;
  scrollable?: boolean;
}
const ContentCard = ({
  fullHeight,
  title,
  className,
  scrollable,
  children,
  expand,
}: IContentCard) => {
  const [height, setHeight] = useState(fullHeight ?? 500);
  const refIco = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleExpandClick = () => {
    if (refIco.current) {
      refIco.current.style.height = `${height + 200}px`;
      setHeight(height + 200);
    }
  };
  const scrollRight = () => {
    if (contentRef?.current) {
      contentRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (contentRef?.current) {
      contentRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  return (
    <div
      ref={refIco}
      className={` relative w-full bg-white  rounded-2xl h-[${fullHeight ?? 500}px] p-[16px] ${className ? className : ''} `}
    >
      <div className=" flex justify-between">
        <div className=" font-extrabold w-fit">
          {title}{' '}
          <div className=" bg-primary h-[4px]  rounded-2xl w-[30px] rotat "></div>
        </div>
        {scrollable && (
          <div className=" flex ">
            <SvgArrow
              style={`  fill-primary rotate-90  cursor-pointer  `}
              onClick={scrollLeft}
            />
            <SvgArrow
              style={`  fill-primary -rotate-90 cursor-pointer  `}
              onClick={scrollRight}
            />
          </div>
        )}
      </div>
      {scrollable ? (
        <div ref={contentRef} className=" !w-full overflow-hidden ">
          {children}
        </div>
      ) : (
        children
      )}

      {expand && (
        <div className="w-full absolute flex justify-center  bottom-[0px]  backdrop-blur-[1px]   left-0">
          <IconButton onClick={handleExpandClick}>
            <img src="/icons/process/load more.svg" alt="" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
