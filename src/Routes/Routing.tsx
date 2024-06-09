import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import { useEffect } from 'react';
import eventManager, { EVENT_ERROR } from '../events';
import { ErrorNotification } from '../Notifications/notifications';
const Routing = () => {
  useEffect(() => {
    eventManager.on(EVENT_ERROR, (message) => {
      ErrorNotification(message);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/" element={<Login />} /> */}
    </Routes>
  );
};

export default Routing;
