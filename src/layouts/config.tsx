import Home from '../Pages/home/Home';
import Process from '../Pages/home/Home';

export const SideBarPages: {
  name: string;
  icon: string;
  link: string;
  selected?: boolean;
  component: JSX.Element;
}[] = [
  {
    name: 'Home',
    icon: '/icons/process/home-enabled.svg',
    link: '/home',
    selected: true,
    component: <Home />,
  },
  {
    name: 'My Inanitions',
    icon: '/icons/process/my-inanitions.svg',
    link: '/my-inanitions',
    selected: false,
    component: <>My Inanitions</>,
  },
  {
    name: 'Inanitions',
    icon: '/icons/process/inanitions.svg',
    link: '/inanitions',
    selected: false,
    component: <>Inanitions</>,
  },
  {
    name: 'Drugs',
    icon: '/icons/process/drugs.svg',
    link: '/drugs',
    selected: false,
    component: <>Drugs</>,
  },
  {
    name: 'Doctor Online',
    icon: '/icons/process/doctor-online.svg',
    link: '/doctor-online',
    selected: false,
    component: <>Doctor Online</>,
  },
  {
    name: 'Search Drugs',
    icon: '/icons/process/search-drugs.svg',
    link: '/search-drugs',
    selected: false,
    component: <>Search Drugs</>,
  },
  {
    name: 'Offers',
    icon: '/icons/process/ic_offers.svg',
    link: '/offers',
    selected: false,
    component: <>Offers</>,
  },
];
