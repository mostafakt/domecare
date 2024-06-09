import HomeIcon from '@mui/icons-material/Home';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import ContentCard from '../../Components/ContentCard/ContentCard';
import { LinkSvg } from './components/SvgIcons';
import HomeAccordion from './components/HomeAccordion';
import { useRef } from 'react';

const Home = () => {
  const scrollProducts = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full grid grid-cols-[1fr_200px] gap-x-6 mobile:grid-cols-1 ">
      {/* content */}
      <div className="  flex  flex-col gap-3 ">
        <Breadcrumb
          mainPage={{
            icon: <HomeIcon className="fill-primary" />,
            link: '/home',
            name: 'Home',
          }}
          ParentPages={[{ link: '/profile', name: 'Profile' }]}
          currentPage="Services"
        />
        <div className="flex gap-[15px]  w-full justify-center items-center ">
          <div className=" cursor-pointer w-[60px] h-[60px] rounded-2xl bg-[#E7E9EF] flex justify-center items-center ">
            <img src="/icons/process/service1.svg" alt="" />
          </div>
          <div className="w-[1px] h-[40px] bg-[#E7E9EF]"></div>{' '}
          <div className="cursor-pointer w-[60px] h-[60px] rounded-2xl bg-[#E7E9EF] flex justify-center items-center ">
            <img src="/icons/process/service2.svg" alt="" />
          </div>
          <div className="w-[1px] h-[40px] bg-[#E7E9EF]"></div>{' '}
          <div className="cursor-pointer w-[60px] h-[60px] rounded-2xl bg-[#E7E9EF] flex justify-center items-center ">
            <img src="/icons/process/service3.svg" alt="" />
          </div>
          <div className="w-[1px] h-[40px] bg-[#E7E9EF]"></div>{' '}
          <div className="cursor-pointer w-[60px] h-[60px] rounded-2xl bg-[#E7E9EF] flex justify-center items-center ">
            <img src="/icons/process/service4.svg" alt="" />
          </div>
        </div>
        {/* services card */}
        <ContentCard expand className=" overflow-hidden" title="Services">
          <div className="flex flex-col ">
            <div className="w-full flex   flex-row-reverse ">
              {/* link button */}
              <div className=" bg-background-heighLight cursor-pointer rounded-t-2xl ">
                <LinkSvg style=" fill-primary p-[5px] " />
              </div>
            </div>
            <div className=" cursor-pointer mt-[10px] bg-background-heighLight rounded-2xl flex p-[12px] justify-between">
              <div className="text-primary text-xs">
                Lorem Ipsum dolor sit amit
              </div>
              <div className="text-primary text-xs">Action</div>
            </div>
            <HomeAccordion />
            <HomeAccordion />
            <HomeAccordion />
            <HomeAccordion />
          </div>
        </ContentCard>
        <ContentCard
          fullHeight={270}
          className=" overflow-hidden !h-[270px]"
          title="Products"
          scrollable
        >
          <div ref={scrollProducts} className="flex  gap-1 ">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <img
                className=" cursor-pointer "
                src="/icons/process/product.svg"
                alt=""
              />
            ))}
          </div>
        </ContentCard>
      </div>
      {/* profile */}
      <div className=" ">
        <div className=" flex flex-col bg-white h-[500px] rounded-lg">
          <img src="/images/profile.png" alt="" />
          <div className="flex flex-col px-3 mt-5">
            <div className="">Lorem Ipsum</div>
            <div className=" text-gray-400 text-[12px]">
              Lorem Ipsum dolor sit amit
            </div>
            <div className=" w-full h-[2px] bg-background-main my-[5px] "></div>
            <div className=" font-extrabold w-fit mt-3">
              <div>Contact us</div>
              <div className=" bg-primary h-[4px]  rounded-2xl w-[30px] rotat "></div>
            </div>
            <div className=" font-extrabold w-full flex justify-between mt-3 items-center ">
              <img src="/icons/process/ic_phone.svg" alt="" />
              <div className="text-[12px] ">+963 123 456 789 </div>
            </div>
            <div className=" font-extrabold w-full flex justify-between mt-3 items-center ">
              <img src="/icons/process/ic_linkedin.svg" alt="" />
              <div className=" text-[12px] "> Lorem Ipsum dolor sit </div>
            </div>
            <div className=" font-extrabold w-full flex justify-between mt-3 items-center ">
              <img src="/icons/process/ic_instagram.svg" alt="" />
              <div className=" text-[12px] "> Lorem Ipsum dolor sit </div>
            </div>
            <div className=" font-extrabold w-full flex justify-between mt-3 items-center ">
              <img src="/icons/process/ic_facebook.svg" alt="" />
              <div className=" text-[12px] "> Lorem Ipsum dolor sit </div>
            </div>
            <div className=" font-extrabold w-full flex justify-between mt-3 items-center ">
              <img src="/icons/process/ic_linkedin.svg" alt="" />
              <div className=" text-[12px] "> Lorem Ipsum dolor sit </div>
            </div>
            <div className=" font-extrabold w-full flex justify-between mt-3 items-center ">
              <img src="/icons/process/ic_instagram.svg" alt="" />
              <div className=" text-[12px] "> Lorem Ipsum dolor sit </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
