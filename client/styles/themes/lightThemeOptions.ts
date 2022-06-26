import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(173, 31, 234)',
    },
    secondary: {
      main: 'rgb(58, 67, 116)',
    },
    info: {
      main: 'rgb(70, 97, 230)',
    },
  },
  typography: {
    fontFamily: [
      'Jost',
      'sans-serif',
    ].join(', '),
    h1: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '35px',
      letterSpacing: '-0.33px',
      color: 'rgb(55, 63, 104)',
    },
    h2: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '19px',
      letterSpacing: '-0.25px',
      color: 'rgb(55, 63, 104)',
    },
    h3: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '26px',
      letterSpacing: '-0.25px',
      color: 'rgb(55, 63, 104)',
      margin: '0 auto',
    },
    h4: {
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '20px',
      letterSpacing:' -0.2px',
      color: 'rgb(55, 63, 104)',
    },
    subtitle2: {
      fontSize: '14px',
      color: 'rgb(100, 113, 150)',
      margin: 'auto 0',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '23px',
      color: 'rgb(55, 63, 104)',
    },
    body2: {
      fontSize: '13px',
      fontWeight: '600',
      lineHeight: '19px',
      color: 'rgb(55, 63, 104)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '700',
          padding: '.75rem 2rem',
          borderRadius: '10px',
        },
      },
    },
  }
};

export default lightThemeOptions;