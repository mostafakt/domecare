import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import Process from '../Pages/home/Home';
import MainPage from '../Pages/MainPage/MainPage';
import { SideBarPages } from '../layouts/config';
import AddServices from '../Pages/Services/AddServices';
const PrivateRoute = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {SideBarPages.map((r) => (
          <Route path={r.link} element={r.component} />
        ))}
        <Route path={'/home/services/add'} element={<AddServices />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
