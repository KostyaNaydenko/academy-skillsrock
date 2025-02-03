import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#FFF',
    },
    secondary: {
      main: '#dc004e',
      contrastText: '#FFF',
    },
    success: {
      main: '#00b300',
    },
    info: {
      main: '#FFF'
    },
    background: {
      paper: '#dcdcdc',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,   
      xl: 1920,   
  },
},
});
