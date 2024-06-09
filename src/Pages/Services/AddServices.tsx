import React from 'react';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import ContentCard from '../../Components/ContentCard/ContentCard';
import HomeIcon from '@mui/icons-material/Home';
import InputWithLogo from '../../Components/InputWithLogo/InputWithLogo';
import InputAdornment from '../../Components/InputWithLogo/InputAdornment/InputAdornment';
import { Visibility } from '@mui/icons-material';
import SearchInputWithLogo from '../../Components/InputWithLogo/SearchInputWithLogo';
import { EditSvg } from '../home/components/SvgIcons';
import { IconButton } from '@mui/material';
import ServicesAccordion from './components/ServicesAccordion';

const AddServices = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 max-w-[800px] gap-x-6 mobile:grid-cols-1 ">
      {/* content */}
      <div className="  flex  flex-col gap-3 ">
        <Breadcrumb
          mainPage={{
            icon: <HomeIcon className="fill-primary" />,
            link: '/home',
            name: 'Home',
          }}
          ParentPages={[
            { link: '/profile', name: 'Profile' },
            { link: '/profile', name: 'service' },
          ]}
          currentPage="Add New Services"
        />

        <ContentCard className=" overflow-hidden" title="Add New Services">
          <div className=" relative flex mt-[15px] flex-col pl-[20px] ">
            <div className=" absolute  top-[7px] mobile:top-[-50px]  w-[115px] right-[-15px] h-[50px] cursor-pointer flex items-center rounded-l-[100px] justify-center bg-primary ">
              Link
            </div>
            <div className="flex justify-between pr-[100px] mobile:pr-[1px]">
              <SearchInputWithLogo
                containerWidth=" !rounded-[100px] overflow-hidden mobile:w-[320px] w-[358px] "
                className=" rounded-[100px] "
                label="Add  New Services "
                startAdornment={
                  <InputAdornment position="start">
                    <>
                      <img src="/icons/process/search.svg" alt="" />
                    </>
                  </InputAdornment>
                }
              />

              <div className="flex ">
                <IconButton>
                  <img src="/icons/process/delete_service.svg" alt="" />
                </IconButton>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <ServicesAccordion />
              <ServicesAccordion />
              <ServicesAccordion />
            </div>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default AddServices;
