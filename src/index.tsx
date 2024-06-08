import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes/Routing';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './state';
import PrivateRoutes from './Routes/PrivateRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Toaster />
          <Routing />
          <PrivateRoutes />
        </BrowserRouter>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
);
reportWebVitals();
