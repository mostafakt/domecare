import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1225,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: '#34C87C',
    },
    secondary: {
      main: '#00B08C',
    },
  },

  typography: {},
});

export default theme;
