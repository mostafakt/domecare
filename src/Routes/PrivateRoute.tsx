import { Route, Routes } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import Process from '../Pages/home/Home';
import MainPage from '../Pages/MainPage/MainPage';
import { SideBarPages } from '../layouts/config';
const PrivateRoute = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />} />

      <Route element={<AuthLayout />}>
        {SideBarPages.map((r) => (
          <Route path={r.link} element={r.component} />
        ))}
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
